export interface Iparameters {
  from_city_id: string;
  // Идентификатор города, откуда планируется путешествие
  to_city_id: string;
  // Идентификатор города, куда планируется путешествие
  date_start?: string;
  // Дата отбытия туда (в формате YYYY-DD-MM; например 2030-03-01)
  date_end?: string;
  // Дата отбытия обратно (в формате YYYY-DD-MM; например 2030-03-01)
  date_start_arrival?: string;
  // Дата прибытия туда (в формате YYYY-DD-MM; например 2030-03-01)
  date_end_arrival?: string;
  // Дата прибытия обратно (в формате YYYY-DD-MM; например 2030-03-01)
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
  have_express?: boolean;
  // Экспресс
  price_from?: number;
  // Цена от
  price_to?: number;
  // Цена до
  start_departure_hour_from?: number;
  // Час отбытия от
  start_departure_hour_to?: number;
  // Час отбытия до
  start_arrival_hour_from?: number;
  // Час прибытия от
  start_arrival_hour_to?: number;
  // Час прибытия до
  end_departure_hour_from?: number;
  // Час отбытия назад от
  end_departure_hour_to?: number;
  // Час отбытия назад до
  end_arrival_hour_from?: number;
  // Час прибытия назад от (работает при установленном параметре date_end)
  end_arrival_hour_to?: number;
  // Час прибытия назад до (работает при установленном параметре date_end)
  limit?: number;
  // Количество результатов на странице
  offset?: number;
  // Количество результатов, которое необходимо пропустить в выдаче
  sort?: string;
  // Сортировка результатов Available values : date, price, duration
}

// const item = {
//   have_first_class: false,
//   have_second_class: false,
//   have_third_class: false,
//   have_fourth_class: false,
//   have_wifi: false,
//   have_air_conditioning: false,
//   is_express: false,
//   min_price: 1971,
//   available_seats: 127,
//   available_seats_info: {
//     second: 32,
//     third: 96,
//   },
//   departure: {
//     _id: "6212d3de5fc56b48553d53b3",
//     have_first_class: false,
//     have_second_class: true,
//     have_third_class: true,
//     have_fourth_class: false,
//     have_wifi: true,
//     have_air_conditioning: true,
//     is_express: false,
//     min_price: 1971,
//     duration: 150300,
//     available_seats: 127,
//     available_seats_info: {
//       second: 32,
//       third: 96,
//     },
//     train: {
//       _id: "6212d3ca5fc56b48553d4cd8",
//       name: "Тройка - 89",
//     },
//     from: {
//       railway_station_name: "Казанский",
//       city: {
//         _id: "6212d3c15fc56b48553d43bc",
//         name: "москва",
//       },
//       datetime: 1645534735,
//     },
//     to: {
//       railway_station_name: "Московский",
//       city: {
//         _id: "6212d3c15fc56b48553d43bd",
//         name: "санкт-петербург",
//       },
//       datetime: 1645685035,
//     },
//     price_info: {
//       second: {
//         top_price: 2358,
//         bottom_price: 1971,
//       },
//       third: {
//         top_price: 3255,
//         bottom_price: 3550,
//         side_price: 4455,
//       },
//     },
//   },
// };

const item = {
  have_first_class: false,
  have_second_class: false,
  have_third_class: false,
  have_fourth_class: false,
  have_wifi: false,
  have_air_conditioning: false,
  is_express: false,
  min_price: 0,
  arrival: {
    _id: "string",
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    train: {
      _id: "",
      name: "",
    },
    from: {
      railway_station_name: "",
      city: {
        _id: "",
        name: "",
      },
      datetime: 0,
    },
    to: {
      railway_station_name: "",
      city: {
        _id: "",
        name: "",
      },
      datetime: 0,
    },
    min_price: 0,
    duration: 0,
    price_info: {
      first: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
      second: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
      third: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
      fourth: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
    },
    seats_info: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
    },
  },
  departure: {
    _id: "",
    have_first_class: false,
    have_second_class: false,
    have_third_class: false,
    have_fourth_class: false,
    have_wifi: false,
    have_air_conditioning: false,
    train: {
      _id: "",
      name: "",
    },
    from: {
      railway_station_name: "",
      city: {
        _id: "",
        name: "",
      },
      datetime: 0,
    },
    to: {
      railway_station_name: "",
      city: {
        _id: "",
        name: "",
      },
      datetime: 0,
    },
    min_price: 0,
    duration: 0,
    price_info: {
      first: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
      second: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
      third: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
      fourth: {
        price: 0,
        top_price: 0,
        bottom_price: 0,
        side_price: 0,
        linens_price: 0,
        wifi_price: 0,
      },
    },
    seats_info: {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
    },
  },
  total_avaliable_seats: 0,
};

export type itemRoutes = typeof item;

export interface IgetRoutesResp {
  total_count: number;
  items: Array<itemRoutes>;
}
