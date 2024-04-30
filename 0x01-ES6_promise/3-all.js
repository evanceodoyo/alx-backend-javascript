import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const valuesObj = {...values[0], ...values[1]}
      console.log(valuesObj.body, valuesObj.firstName, valuesObj.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
