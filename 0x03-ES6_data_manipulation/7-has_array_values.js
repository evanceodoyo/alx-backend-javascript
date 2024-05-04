export default function hasValuesFromArray(set, array) {
  const newSet = new Set(array);
  return newSet.isSubsetOf(set);
}
