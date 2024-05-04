export default function updateUniqueItems(groceries) {
  if (!(groceries instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const key of groceries.keys()) {
    if (groceries.get(key) === 1) {
      groceries.set(key, 100);
    }
  }
  return groceries;
}
