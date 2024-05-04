export default function cleanSet(set, startString) {
  if (!startString || !set || !(set instanceof Set) || (typeof startString !== 'string')) {
    return '';
  }

  const result = [];
  set.forEach((value) => {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subStr = value.substring(startString.length);

      if (subStr && subStr !== value) {
        result.push(subStr);
      }
    }
  });
  return result.join('-');
}
