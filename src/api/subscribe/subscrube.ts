import { instanse } from "..";

export const postSubscrube = (email: string) => {
  return instanse
    .post(`subscribe`, { params: { email: email } })
    .then((res) => res.data.status);
};
