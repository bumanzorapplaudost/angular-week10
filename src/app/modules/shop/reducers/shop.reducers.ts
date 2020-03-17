import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
  createReducer,
  on,
} from '@ngrx/store';
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

export const initialShopState: ShopState = {
  ids: [],
  entities: {},
  currentProduct: null,
  filteredIds: [],
  pagination: {},
};

export const shopAdapter = createEntityAdapter<Product>();

export const initialShopState = shopAdapter.getInitialState();

export const shopReducers = createReducer(
  initialShopState,
  on(shopActions.getProductsSuccessAction, (state, action) => {
    return { ...state };
  })
);
