import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ShopRoutingModule } from './shop-routing.module';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CategoryListComponent } from './components/category-list/category-list.component';
import { MatListModule } from '@angular/material/list';

const components = [
  ProductListComponent,
  ProductDetailsComponent,
  CategoryListComponent,
  CartComponent,
  MainComponent,
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, ShopRoutingModule, MatSidenavModule, MatListModule],
})
export class ShopModule {}
