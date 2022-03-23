import { instanse } from "..";
import {
  IgetRoutesResp,
  Iparameters,
} from "../../components/organisms/Routes/interfaces";

export const getRoutes = async (
  parameters: Iparameters
): Promise<IgetRoutesResp> => {
  const res = await instanse.get("routes", { params: { ...parameters } });
  return res.data;
};
