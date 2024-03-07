import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  try {
    const res1 = await createUser();
    const res2 = await uploadPhoto();
    return { photo: res2, user: res1 };
  } catch (error) {
    return { photo: null, user: null };
  }
}
