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
