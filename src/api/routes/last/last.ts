import { instanse } from "../..";
import { itemLastType } from "../../../components/organisms/LastList/interfaces";

export const getLast = async (): Promise<Array<itemLastType>> => {
  const res = await instanse.get("routes/last");
  return res.data;
};
