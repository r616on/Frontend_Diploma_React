import { instanse } from "../..";
import { IitemCities } from "./interfaces";

export const getCities = (name: string): Promise<Array<IitemCities>> => {
  return instanse
    .get("routes/cities", { params: { name: name } })
    .then((res) => res.data);
};
