import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './modules/shared/components/layout/layout.component';
import { AuthFormComponent } from './modules/auth/components/auth-form/auth-form.component';
import { MainComponent } from './modules/shop/components/main/main.component';
import { IsAuthenticatedGuard } from './modules/shared/guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'auth',
        component: AuthFormComponent,
        canLoad: [IsAuthenticatedGuard],
      },
      {
        path: 'shop',
        component: MainComponent,
        loadChildren: () =>
          import('./modules/shop/shop.module').then((m) => m.ShopModule),
      },
      {
        path: 'cart',
        component: MainComponent,
        loadChildren: () =>
          import('./modules/cart/cart.module').then((m) => m.CartModule),
      },
    ],
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
  providers: [IsAuthenticatedGuard],
})
export class AppRoutingModule {}
