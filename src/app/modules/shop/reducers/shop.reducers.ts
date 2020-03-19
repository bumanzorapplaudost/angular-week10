import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../models/product.model';
import { shopActions } from './shop-action-types';
import { PageObject } from '../interfaces/page-object.interface';

export const shopFeatureKey = 'shop';

export interface ShopState extends EntityState<Product> {
  currentProduct: number;
  filteredIds: number[];
  totalRecords: number;
  page: number;
  pagination: PageObject<number>;
}

export const shopAdapter = createEntityAdapter<Product>();

export const initialShopState = shopAdapter.getInitialState({
  currentProduct: null,
  filteredIds: [],
  totalRecords: null,
  page: null,
  pagination: {},
});

export const shopReducers = createReducer(
  initialShopState,
  on(shopActions.getProductsSuccessAction, (state: ShopState, action) => {
    const totalRecords = action.payload.paginationInfo.total;
    const newState = {
      ...state,
      totalRecords,
      pagination: {
        ...state.pagination,
        [action.payload.paginationInfo.currentPage]: action.payload.ids,
      },
    };
    return shopAdapter.upsertMany(action.payload.productList, newState);
  }),
  on(shopActions.getSingleProductAction, (state: ShopState, action) => {
    return { ...state, currentProduct: action.productId };
  })
);
