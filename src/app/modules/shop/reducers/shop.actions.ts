import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';
import { PaginationInfo } from '../../shared/models/pagination-info.model';

export const getProductsAction = createAction('[Shop] Get Products');

export const getProductsSuccessAction = createAction(
  '[Shop] Get Products Success',
  props<{
    payload: {
      productList: Product[];
      paginationInfo: PaginationInfo;
      ids: number[];
    };
  }>()
);

export const getSingleProductAction = createAction(
  '[Shop] Get Single Product',
  props<{ payload: Product }>()
);

