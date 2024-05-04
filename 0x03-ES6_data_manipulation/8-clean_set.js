export default function cleanSet(set, startString) {
  const cleanArray = [];

  if (startString.length === 0) {
    return '';
  }

  for (const elem of set) {
    if (elem.startsWith(startString)) {
      cleanArray.push(elem.slice(startString.length));
    }
  }
  return cleanArray.join('-');
}
