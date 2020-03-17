import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { shopActions } from './shop-action-types';
import { map, mergeMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/states/app.state';

@Injectable()
export class ShopEffects {
  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private store: Store<AppState>
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(shopActions.getProductsAction),
      mergeMap(() => this.productsService.listProducts()),
      map((response) => {
        const productList = response.data;
        const ids = productList.map((product) => product.id);
        return shopActions.getProductsSuccessAction({
          payload: { productList, ids, paginationInfo: response.meta },
        });
      })
    )
  );
}
