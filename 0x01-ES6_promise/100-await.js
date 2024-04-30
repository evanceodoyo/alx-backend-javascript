import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const results = await Promise.allSettled([uploadPhoto(), createUser()]);
  const resultStatus = results.map((res) => res.status);

  if (resultStatus.includes('rejected')) {
    return { photo: null, user: null };
  }

  const photo = uploadPhoto();
  const user = createUser();
  return { photo, user };
}
