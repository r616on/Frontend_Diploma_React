export interface Iparameters {
  from_city_id: string | null;
  // Идентификатор города, откуда планируется путешествие
  to_city_id: string | null;
  // Идентификатор города, куда планируется путешествие
  date_start?: string | null;
  // Дата отбытия туда (в формате YYYY-DD-MM; например 2030-03-01)
  date_end?: string | null;
  // Дата отбытия обратно (в формате YYYY-DD-MM; например 2030-03-01)
  date_start_arrival?: string | null;
  // Дата прибытия туда (в формате YYYY-DD-MM; например 2030-03-01)
  date_end_arrival?: string | null;
  // Дата прибытия обратно (в формате YYYY-DD-MM; например 2030-03-01)
  have_first_class?: boolean | null;
  // Люкс
  have_second_class?: boolean | null;
  have_third_class?: boolean | null;
  // Плацкарт
  have_fourth_class?: boolean | null;
  // Сидячее место
  have_wifi?: boolean | null;
  // Имеется WiFi
  have_air_conditioning?: boolean | null;
  // Имеется кондиционер
  have_express?: boolean | null;
  // Экспресс
  price_from?: number | null;
  // Цена от
  price_to?: number | null;
  // Цена до
  start_departure_hour_from?: number | null;
  // Час отбытия от
  start_departure_hour_to?: number | null;
  // Час отбытия до
  start_arrival_hour_from?: number | null;
  // Час прибытия от
  start_arrival_hour_to?: number | null;
  // Час прибытия до
  end_departure_hour_from?: number | null;
  // Час отбытия назад от
  end_departure_hour_to?: number | null;
  // Час отбытия назад до
  end_arrival_hour_from?: number | null;
  // Час прибытия назад от (работает при установленном параметре date_end)
  end_arrival_hour_to?: number | null;
  // Час прибытия назад до (работает при установленном параметре date_end)
  limit?: number | null;
  // Количество результатов на странице
  offset?: number | null;
  // Количество результатов, которое необходимо пропустить в выдаче
  sort?: string | null;
  // Сортировка результатов Available values : date, price, duration
}

export interface IitemRoutes {
  have_first_class?: boolean;
  have_second_class?: boolean;
  have_third_class?: boolean;
  have_fourth_class?: boolean;
  have_wifi?: boolean;
  have_air_conditioning?: boolean;
  is_express?: boolean;
  min_price?: number;
  arrival?: {
    _id?: string;
    have_first_class?: boolean;
    have_second_class?: boolean;
    have_third_class?: boolean;
    have_fourth_class?: boolean;
    have_wifi?: boolean;
    have_air_conditioning?: boolean;
    train?: {
      _id?: string;
      name?: string;
    };
    from?: {
      railway_station_name?: string;
      city?: {
        _id?: string;
        name?: string;
      };
      datetime?: number;
    };
    to?: {
      railway_station_name?: string;
      city?: {
        _id?: string;
        name?: string;
      };
      datetime?: number;
    };
    min_price?: number;
    duration?: number;
    price_info?: {
      first?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
      second?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
      third?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
      fourth?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
    };
    seats_info?: {
      first?: number;
      second?: number;
      third?: number;
      fourth?: number;
    };
  };
  departure?: {
    _id?: string;
    have_first_class?: false;
    have_second_class?: false;
    have_third_class?: false;
    have_fourth_class?: false;
    have_wifi?: false;
    have_air_conditioning?: false;
    train?: {
      _id?: string;
      name?: string;
    };
    from?: {
      railway_station_name?: string;
      city?: {
        _id?: string;
        name?: string;
      };
      datetime?: number;
    };
    to?: {
      railway_station_name?: string;
      city?: {
        _id?: string;
        name?: string;
      };
      datetime?: number;
    };
    min_price?: number;
    duration?: number;
    price_info?: {
      first?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
      second?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
      third?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
      fourth?: {
        price?: number;
        top_price?: number;
        bottom_price?: number;
        side_price?: number;
        linens_price?: number;
        wifi_price?: number;
      };
    };
    available_seats?: number;
    available_seats_info?: {
      first?: number;
      second?: number;
      third?: number;
      fourth?: number;
    };
  };
  total_avaliable_seats?: number;
}

export interface IgetRoutesResp {
  total_count: number;
  items: Array<IitemRoutes>;
}

// type ParamsType =
//   | "from_city_id"
//   | "to_city_id"
//   | "date_start"
//   | "date_end"
//   | "date_start_arrival"
//   | "date_end_arrival"
//   | "have_first_class"
//   | "have_second_class"
//   | "have_third_class"
//   | "have_fourth_class"
//   | "have_wifi"
//   | "have_air_conditioning"
//   | "have_express"
//   | "price_from"
//   | "price_to"
//   | "start_departure_hour_from"
//   | "start_departure_hour_to"
//   | "start_arrival_hour_from"
//   | "start_arrival_hour_to"
//   | "end_departure_hour_from"
//   | "end_departure_hour_to"
//   | "end_arrival_hour_from"
//   | "end_arrival_hour_to"
//   | "limit"
//   | "offset"
//   | "sort";
