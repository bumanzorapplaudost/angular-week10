import { createSelector } from '@ngrx/store';
import { ShopState } from './index';
import { AppState } from '../../../store/states/app.state';

export const getFilteredIds = createSelector(
  (state: AppState) => state.shop,
  (shop: ShopState) => shop.filteredIds
);
