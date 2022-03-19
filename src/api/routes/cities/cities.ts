import { instanse } from "../..";

interface IgetCitiesRespItem {
  _id: string;
  name: string;
}
export const getCities = (name: string): Promise<Array<IgetCitiesRespItem>> => {
  return instanse
    .get("routes/cities", { params: { name: name } })
    .then((res) => res.data);
};
