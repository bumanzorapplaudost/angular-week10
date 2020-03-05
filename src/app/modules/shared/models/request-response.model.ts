import { RequestError } from './request-error.model';

export class RequestResponse<T> {
  data: T;
  errors?: RequestError[];
  filter?: {
    released_at_gteq: string;
    released_at_lteq: string;
    author_not_null: number;
  };
  meta: {
    current_page: number;
    from: any;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
  };
  page?: {
    size: number;
    number: number;
  };
}
