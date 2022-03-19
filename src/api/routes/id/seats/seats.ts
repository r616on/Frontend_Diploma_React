import { instanse } from "../../..";
import { itemSeatsType } from "./interfaces";

interface IgetIdSeats {
  id: string;
  have_first_class?: boolean;
  have_second_class?: boolean;
  have_third_class?: boolean;
  have_fourth_class?: boolean;
  have_wifi?: boolean;
  have_air_conditioning?: boolean;
}
export const getIdSeats = async (
  params: IgetIdSeats
): Promise<Array<itemSeatsType>> => {
  const res = await instanse.get(`routes/${params.id}/seats`, {
    params: {
      ...params,
    },
  });
  return res.data;
};
