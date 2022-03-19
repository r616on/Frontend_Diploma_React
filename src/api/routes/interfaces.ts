export interface Iparameters {
  from_city_id: string;
  to_city_id: string;
  date_start?: string;
  date_end?: string;
  date_start_arrival?: string;
  date_end_arrival?: string;
  have_first_class?: boolean;
  have_second_class?: boolean;
  have_third_class?: boolean;
  have_fourth_class?: boolean;
  have_wifi?: boolean;
  have_air_conditioning?: boolean;
  have_express?: boolean;
  price_from?: number;
  price_to?: number;
  start_departure_hour_from?: number;
  start_departure_hour_to?: number;
  start_arrival_hour_from?: number;
  start_arrival_hour_to?: number;
  end_departure_hour_from?: number;
  end_departure_hour_to?: number;
  end_arrival_hour_from?: number;
  end_arrival_hour_to?: number;
  limit?: number;
  offset?: number;
  sort?: string;
}

const item = {
  have_first_class: false,
  have_second_class: false,
  have_third_class: false,
  have_fourth_class: false,
  have_wifi: false,
  have_air_conditioning: false,
  is_express: false,
  min_price: 1971,
  available_seats: 127,
  available_seats_info: {
    second: 32,
    third: 96,
  },
  departure: {
    _id: "6212d3de5fc56b48553d53b3",
    have_first_class: false,
    have_second_class: true,
    have_third_class: true,
    have_fourth_class: false,
    have_wifi: true,
    have_air_conditioning: true,
    is_express: false,
    min_price: 1971,
    duration: 150300,
    available_seats: 127,
    available_seats_info: {
      second: 32,
      third: 96,
    },
    train: {
      _id: "6212d3ca5fc56b48553d4cd8",
      name: "Тройка - 89",
    },
    from: {
      railway_station_name: "Казанский",
      city: {
        _id: "6212d3c15fc56b48553d43bc",
        name: "москва",
      },
      datetime: 1645534735,
    },
    to: {
      railway_station_name: "Московский",
      city: {
        _id: "6212d3c15fc56b48553d43bd",
        name: "санкт-петербург",
      },
      datetime: 1645685035,
    },
    price_info: {
      second: {
        top_price: 2358,
        bottom_price: 1971,
      },
      third: {
        top_price: 3255,
        bottom_price: 3550,
        side_price: 4455,
      },
    },
  },
};
export interface IgetRoutesResp {
  total_count: number;
  items: typeof item;
}
