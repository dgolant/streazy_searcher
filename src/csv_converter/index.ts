import buildHeaders from "./street-easy-headers";
import * as fs from "fs/promises";
import * as fsSync from "fs";
import path from 'path';
import { logger } from '../util';


const config = JSON.parse(fsSync.readFileSync('./config/secrets.json', { encoding: "utf8" }));

async function main(fileName: string) {
  const input = JSON.parse(
    await fs.readFile(fileName, { encoding: "utf8" })
  );
  const commuteColumns = input[0].destinations.map((d) => `Time to ${d.address}`);
  const csvArray = [
    ['Address',
      'Price',
      'URL',
      'Neighborhood',
      'Square Feet',
      'Price / Sqft',
      'Number of Rooms',
      'Number of Bedrooms',
      'Number of Bathrooms',
      ...commuteColumns
    ]]
  input.map((property) => {
    const travelLines = property.destinations.map(
      (dest) => {
        const routeArray = []
        for (let mode in dest.travel) {
          routeArray.push(`${mode}: ${dest.travel[mode]}`);
        }
        return routeArray.join('; ');
      });
    csvArray.push([
      property.details.address || 'blank', // Address
      'blank', // Price
      'blank', // URL
      'blank', // Neighborhood
      property.details.squareFootage, // SQFT
      property.details.pricePerFoot || 'blank', // $ / Sqft
      property.details.numRooms || 'blank', // Number of Rooms
      property.details.numBeds || 'blank', // Number of Beds
      property.details.numBaths || 'blank', // Number of Bathrooms
      ...travelLines
    ])
  });

  // console.log(csvArray);
  const csvString = csvArray.map((b) => {
    return `${b.join(', ')}`;
  })
  return csvString.join('\n');
}

(async function () {
  try {
    const args = process.argv.slice(2);
    const fileName = args[0];
    const fileParts = fileName.split('/');
    const outputFileName = fileParts[1].replace('.json', '.csv');
    const outputFilePath = path.join(process.cwd(), 'output_csv', outputFileName);
    console.log(outputFilePath);
    const a = await Promise.all(await main(fileName));
    await fs.writeFile(outputFilePath, a);
    process.exit(0);
  } catch (e) {
    logger.error({ e });
  }
})();

// notes: after a while, streeteasy will start blocking my user agent
