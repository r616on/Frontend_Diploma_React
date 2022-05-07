export interface IparamIdSeats {
  id: string | undefined;
  // Идентификатор направления
  have_first_class?: boolean | null;
  // Люкс
  have_second_class?: boolean | null;
  // Купе
  have_third_class?: boolean | null;
  // Плацкарт
  have_fourth_class?: boolean | null;
  // Сидячее место
  have_wifi?: boolean | null;
  // Имеется WiFi
  have_air_conditioning?: boolean | null;
  // Имеется кондиционер
}

export interface Iseats {
  index: number;
  available: boolean;
}
export interface Icoach {
  _id: string;
  name: string;
  class_type: string;
  have_wifi: boolean;
  have_air_conditioning: boolean;
  price: number;
  top_price: number;
  bottom_price: number;
  side_price: number;
  linens_price: number;
  wifi_price: number;
  is_linens_included: boolean;
  available_seats: number;
  train: string;
}
export interface itemSeatsType {
  coach: Icoach;
  seats: Array<Iseats>;
}
