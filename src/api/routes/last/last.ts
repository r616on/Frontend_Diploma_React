import { instanse } from "../..";
import { itemType } from "./interfaces";

export const getLast = async (): Promise<Array<itemType>> => {
  const res = await instanse.get("routes/last");
  return res.data;
};
