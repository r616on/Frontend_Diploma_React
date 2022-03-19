const item = {
  user: {
    first_name: "string",
    last_name: "string",
    patronymic: "string",
    phone: "string",
    email: "string",
    payment_method: "cash",
  },
  departure: {
    route_direction_id: "string",
    seats: [
      {
        coach_id: "string",
        person_info: {
          is_adult: true,
          first_name: "string",
          last_name: "string",
          patronymic: "string",
          gender: true,
          birthday: "string",
          document_type: "string",
          document_data: "string",
        },
        seat_number: 0,
        is_child: true,
        include_children_seat: true,
      },
    ],
  },
  arrival: {
    route_direction_id: "string",
    seats: [
      {
        coach_id: "string",
        person_info: {
          is_adult: true,
          first_name: "string",
          last_name: "string",
          patronymic: "string",
          gender: true,
          birthday: "string",
          document_type: "string",
          document_data: "string",
        },
        seat_number: 0,
        is_child: true,
        include_children_seat: true,
      },
    ],
  },
};
export type dataType = typeof item;
