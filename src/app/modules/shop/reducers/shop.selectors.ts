import { createFeatureSelector, createSelector } from '@ngrx/store';
import { shopAdapter, ShopState } from './shop.reducers';

const shopSelectors = shopAdapter.getSelectors();

export const selectShopState = createFeatureSelector<ShopState>('shop');

export const selectAllProducts = createSelector(
  selectShopState,
  shopSelectors.selectAll
);

export const selectFilteredIds = createSelector(
  selectShopState,
  (state) => state.filteredIds
);
