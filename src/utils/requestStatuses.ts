export interface IRequestStatus {
  loading: boolean;
  ok: boolean;
  error: boolean;
}

export interface IRequestStatuses {
  init: IRequestStatus;
  loading: IRequestStatus;
  ok: IRequestStatus;
  setError: IRequestStatus;
}

const requestStatuses: IRequestStatuses = {
  init: {
    loading: false,
    ok: false,
    error: false,
  },
  loading: {
    loading: true,
    ok: false,
    error: false,
  },
  ok: {
    loading: false,
    ok: true,
    error: false,
  },
  setError: {
    loading: false,
    ok: false,
    error: true,
  },
};

export default requestStatuses;
