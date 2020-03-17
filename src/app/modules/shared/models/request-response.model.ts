import { RequestError } from './request-error.model';
import { Filter } from './filter.model';
import { PaginationInfo } from './pagination-info.model';
import { PageInfo } from './page-info.model';

export class RequestResponse<T> {
  data: T;
  errors?: RequestError[];
  filter?: Filter;
  meta: PaginationInfo;
  page?: PageInfo;
}
