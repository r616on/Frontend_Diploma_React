import { instanse } from "..";
import { dataType } from "./interfaces";

export const postOrder = (data: dataType) => {
  return instanse
    .post(`order`, {
      ...data,
    })
    .then((res) => res);
};
