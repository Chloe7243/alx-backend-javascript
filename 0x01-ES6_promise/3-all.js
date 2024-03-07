import { createUser, uploadPhoto } from "./utils";

export default function handleProfileSignup() {
  createUser().then(({ firstName, lastName }) =>
    uploadPhoto().then(({ body }) => console.log(body, firstName, lastName))
  );
}
