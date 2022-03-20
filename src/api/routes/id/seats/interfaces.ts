export interface IparamIdSeats {
  id: string;
  // Идентификатор направления
  have_first_class?: boolean;
  // Люкс
  have_second_class?: boolean;
  // Купе
  have_third_class?: boolean;
  // Плацкарт
  have_fourth_class?: boolean;
  // Сидячее место
  have_wifi?: boolean;
  // Имеется WiFi
  have_air_conditioning?: boolean;
  // Имеется кондиционер
}

const item = {
  _id: "string",
  name: "string",
  class_type: "first",
  have_wifi: true,
  have_air_conditioning: true,
  price: 0,
  top_price: 0,
  bottom_price: 0,
  side_price: 0,
  linens_price: 0,
  wifi_price: 0,
  avaliable_seats: 0,
  is_linens_included: true,
  seats: [
    {
      index: 0,
      available: true,
    },
  ],
};

export type itemSeatsType = typeof item;
