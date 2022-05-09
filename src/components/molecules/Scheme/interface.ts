import { itemSeatsType } from "../../../api/routes/id/seats/interfaces";

export interface IScheme {
  className?: any;
  coach: itemSeatsType;
  selectedAdultSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedAdultSeat: Function;
  selectedChildSeat: Array<{ id: string; number: number; price: number }>;
  setSelectedChildSeat: Function;
  adultCount: number;
  childCount: number;
  selectedTypePasenger: string;
}
