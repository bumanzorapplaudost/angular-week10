import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { Product } from '../models/product.model';
import { shopActions } from './shop-action-types';
import { PageObject } from '../interfaces/page-object.interface';

export const shopFeatureKey = 'shop';

export interface ShopState extends EntityState<Product> {
  currentProduct: Product;
  filteredIds: number[];
  pagination: PageObject<number>;
}

export const shopAdapter = createEntityAdapter<Product>();

export const initialShopState = shopAdapter.getInitialState({
  currentProduct: null,
  filteredIds: [],
  pagination: {},
});

export const shopReducers = createReducer(
  initialShopState,
  on(shopActions.getProductsSuccessAction, (state, action) => {
    const newState = {
      ...state,
      pagination: {
        ...state.pagination,
        [action.payload.paginationInfo.currentPage]: action.payload.ids,
      },
    };
    return shopAdapter.upsertMany(action.payload.productList, newState);
  }),
  on(shopActions.getSingleProductAction, (state, action) => {
    return { ...state, currentProduct: action.payload };
  })
);
