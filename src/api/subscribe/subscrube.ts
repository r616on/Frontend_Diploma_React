import { instanse } from "..";

export const postSubscrube = (email: string) => {
  return instanse
    .post(`subscribe`, {
      email,
    })
    .then((res) => res);
};
