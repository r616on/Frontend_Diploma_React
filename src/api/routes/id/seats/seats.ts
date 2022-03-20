import { instanse } from "../../..";
import { IparamIdSeats, itemSeatsType } from "./interfaces";

export const getIdSeats = async (
  params: IparamIdSeats
): Promise<Array<itemSeatsType>> => {
  const res = await instanse.get(`routes/${params.id}/seats`, {
    params: {
      ...params,
    },
  });
  return res.data;
};
