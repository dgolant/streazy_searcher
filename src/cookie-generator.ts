
// Add any valid cookies from the streeteasy homepage here.
const cookieStrings = [
  ''
];

export default function () {
  const decider = Math.round(Math.random() * 10) % cookieStrings.length;
  return cookieStrings[decider];
}
