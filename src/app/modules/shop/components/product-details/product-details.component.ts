import { Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../store/states/app.state';
import { AuthStatusService } from '../../../shared/services/auth-status.service';
import { cartActions } from '../../../cart/reducers/cart-action.types';
import { shopActions } from '../../reducers/shop-action-types';
import { selectCurrentProduct } from '../../reducers/shop.selectors';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit, OnDestroy {
  product: Product;
  unsubscribe = new Subject();
  quantity = 0;
  isAuthenticated = false;
  authenticationStatus$: Observable<boolean> = this.authStatusService
    .authStatus;
  currentProduct: Observable<Product> = this.store.pipe(
    select(selectCurrentProduct)
  );

  constructor(
    private store: Store<AppState>,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authStatusService: AuthStatusService
  ) {}

  ngOnInit() {
    this.authenticationStatus$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((status) => (this.isAuthenticated = status));

    this.activatedRoute.paramMap
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((parameters) => {
        if (parameters.has('product_id')) {
          const productId = Number(parameters.get('product_id'));
          this.store.dispatch(
            shopActions.getSingleProductAction({ productId })
          );
        }
      });

    this.currentProduct
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((product) => (this.product = product));
  }

  increaseQuantity() {
    if (this.quantity < this.product.master.stock) {
      this.quantity++;
    }
  }

  addToCart() {
    this.product = {
      ...this.product,
      purchasedQuantity: this.quantity,
    };
    // this.product.purchasedQuantity = this.quantity;
    this.store.dispatch(
      cartActions.addProductToCart({ payload: this.product })
    );

    // this.router.navigate(['/shop']);
  }

  decreaseQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
