import { instanse } from "../..";
import { itemLastType } from "./interfaces";

export const getLast = async (): Promise<Array<itemLastType>> => {
  const res = await instanse.get("routes/last");
  return res.data;
};
