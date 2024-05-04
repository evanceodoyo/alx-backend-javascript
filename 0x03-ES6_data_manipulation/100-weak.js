const weakMap = new WeakMap();

let counter = 0;
function queryAPI(endpoint) {
  counter += 1;
  weakMap.set(endpoint, counter);

  if (weakMap.get(endpoint) >= 5) {
    throw new Error('Endpoint load is high');
  }
}

export { weakMap, queryAPI };
