function onFulfilled() {
  return { status: 200, body: 'success' };
}

function onRejected() {
  return new Error();
}

export default function handleResponseFromAPI(promise) {
  promise.then(onFulfilled, onRejected).finally(() => { console.log('Got a response from the API'); });
}
