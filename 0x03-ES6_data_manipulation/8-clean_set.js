export default function cleanSet(set, startString) {
  if (startString.length === 0 || !set) {
    return '';
  }

  const result = [];
  set.forEach((value) => {
    if (value.startsWith(startString)) {
      result.push(value.substring(startString.length));
    }
  });
  return result.join('-');
}
