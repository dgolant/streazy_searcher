import axios from "axios";
import cheerio from "cheerio";
import fakeUa from "fake-useragent";
import cookieGen from './cookie-generator'
import buildHeaders from "./street-easy-headers";
import * as fs from "fs/promises";
import * as fsSync from "fs";
import path from 'path';


const headers = buildHeaders(fakeUa()); // cannot be used without cookieGen
const config = JSON.parse(fsSync.readFileSync('./config/secrets.json', { encoding: "utf8" }));
const MAPS_API_KEY = config['MAPS_API_KEY'];
const WAIT_SECONDS = 3;

const debug = (s: string | Record<string, any>) => {
  if (process.env.DEBUG) {
    console.debug(s);
  }
}

const info = (s: string | Record<string, any>) => {
  if (process.env.DEBUG || process.env.INFO) {
    console.info(s);
  }
}

const error = (s: string | Record<string, any>) => {
  if (process.env.DEBUG || process.env.INFO || process.env.ERROR) {
    console.error(s);
  }
}


const delay = ms => new Promise(res => setTimeout(res, ms));
async function delayer(counter: number): Promise<void> {
  if (counter % 1 === 0) {
    debug(`waiting ${WAIT_SECONDS} seconds, count ${counter}`);
    await delay(WAIT_SECONDS * 1000);
  }
}

type PropertyResponse = {
  meta: {
    streetEasy: {
      url: string;
      success: boolean;
      message?: string;
    };
    maps?: {
      url: string;
      success: boolean;
      message: string;
    };
  };
  details: PropertyDetails;
};

type PropertyDetails = {
  pricePerFoot?: string;
  squareFootage?: string;
  numRooms?: string;
  numBeds?: string;
  numBaths?: string;
  address?: string;
};

type TransitDurations = {
  walking?: string;
  transit?: string;
};

type Travel = Record<string, TransitDurations>;

type Property = {
  url: string;
  details?: PropertyDetails;
  travel?: Travel;
};

type Input = {
  destinations: Array<{
    address: string;
    transitModes: string[];
  }>;
  propertyUrls: Array<string>;
};

async function parseAddress(doc) {
  return doc(
    "#content > main > div.row.DetailsPage > article.right-two-fifths > section.main-info > h1 > a"
  ).text();
}

async function getPropertyDetailsSection(doc) {
  return doc(
    "#content>main>div.row.DetailsPage>article.right-two-fifths>section.main-info>div>div:nth-child(2)>ul>li"
  );
}

function parsePropertyDetails(detailsSection, doc): PropertyDetails {
  const detailEntries = detailsSection.toArray(); // toArray sheds the non-numeric keys
  const detailsObject: PropertyDetails = {};
  for (let el of detailEntries) {
    const elementText = doc(el).text();
    if (elementText.includes(" per ft²")) {
      detailsObject.pricePerFoot = elementText;
    } else if (elementText.includes("ft²")) {
      detailsObject.squareFootage = elementText.replace(',', '');
    } else if (elementText.includes("rooms")) {
      detailsObject.numRooms = elementText;
    } else if (elementText.includes("beds")) {
      detailsObject.numBeds = elementText;
    } else if (elementText.includes("baths")) {
      detailsObject.numBaths = elementText;
    } //  '5,936 ft²', '$119 per ft²', '10 rooms', '4 beds', '4+ baths'
  }
  return detailsObject;
}

async function getProperty(url: string): Promise<PropertyResponse> {
  const propertyResponse: PropertyResponse = {
    meta: {
      streetEasy: {
        url,
        success: true,
        message: 'unset'
      },
    },
    details: {}
  };
  try {
    headers.cookie = cookieGen();
    headers.Referer = url;
    if (!headers.cookie || !headers.Referer) {
      const e = new Error('HEADERS_MALFORMED')
      e.message = JSON.stringify({ cookie: headers.cookie, Referer: headers.Referer });
    }
    const response = await axios.get(url, { headers });

    const $ = cheerio.load(response.data);
    const address = await parseAddress($);
    const propertyDetailsSection = await getPropertyDetailsSection($);
    const details = parsePropertyDetails(propertyDetailsSection, $);
    details.address = address;

    propertyResponse.details = details;
  } catch (e: unknown) {
    error(
      {
        url,
        message: (e as Error).message
      }
    );
    propertyResponse.meta.streetEasy.success = false;
    propertyResponse.meta.streetEasy.message = (e as Error).message;
  } finally {
    return propertyResponse;
  }
}

async function getDirections(
  subjectAddress: string,
  destination: string,
  transitMode: string = "walking"
): Promise<Record<string, any>> {
  const params = {
    origin: subjectAddress,
    destination,
    mode: transitMode,
    key: MAPS_API_KEY
  }
  const searchParams = new URLSearchParams(params);
  const url = new URL('maps/api/directions/json', 'https://maps.googleapis.com')
  url.search = searchParams.toString();

  var config = {
    method: "get",
    url: url.toString(),
    headers: {},
  };
  try {
    const res = await axios(config);
    return res.data;
  } catch (error) {
    error({ error });
  }
}

async function main() {

  const input: Input = JSON.parse(
    await fs.readFile("./config/input.json", { encoding: "utf8" })
  );

  let counter = 0;
  const propertyDetails: Array<PropertyResponse> = [];
  for (let url of input.propertyUrls) {

    await delayer(counter);
    const det = await getProperty(url);
    counter++
    propertyDetails.push(det);
  }

  // mutate here.... sloppy
  // everyone loves a good cubic growth rate
  const properties = propertyDetails.map(async (property, i) => {
    const prop = {
      ...property,
      destinations: [],
      meta: {
        ...property.meta,
        maps: { success: true, message: undefined }
      },
    };
    if (property.meta.streetEasy.success) {
      for (let destination of input.destinations) {
        const outputDestination = {
          address: destination.address,
          travel: {},
        };

        try {
          for (let mode of destination.transitModes) {
            const directions = await getDirections(
              property.details.address,
              destination.address,
              mode
            );
            outputDestination.travel[mode] =
              directions?.routes[0].legs[0].duration.text;
          }
        } catch (e) {
          prop.meta.maps.success = false;
          prop.meta.maps.message = e.message;
        }
        info(outputDestination)
        prop.destinations.push(outputDestination);
      }
    } else {
      prop.meta.maps.success = false;
      prop.meta.maps.message = "skipped due to failed street easy lookup";
    }
    return prop;
  });

  return properties;
}

(async function () {
  try {
    const a = await Promise.all(await main());
    // console.dir(JSON.stringify(a));
    const timestamp = (new Date()).toISOString().replace('.', 's').replace(/\:/g, "_");
    const writePath = path.join(process.cwd(), 'output', `output-${timestamp}.json`);
    await fs.writeFile(writePath, JSON.stringify(a, null, 2));
    process.exit(0);
  } catch (e) {
    error({ e });
  }
})();

// notes: after a while, streeteasy will start blocking my user agent
