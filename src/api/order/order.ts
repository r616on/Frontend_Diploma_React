import { instanse } from "..";
import { dataType } from "./interfaces";

export const postOrder = (data: dataType) => {
  return instanse
    .post(`order`, { body: { ...data } })
    .then((res) => res.data.status)
    .catch(function (error) {
      console.log(error);
    });
};
