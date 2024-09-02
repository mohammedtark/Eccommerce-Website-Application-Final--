import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './core/guard/auth.guard';

const routes: Routes = [
  //blank
  {
    path: '',
    canActivate:[authGuard],
    loadComponent: () =>
      import('./layouts/blank-layout/blank-layout.component').then(
        (m) => m.BlankLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      {
        path: 'home',
        loadComponent: () =>
          import('./Components/home/home.component').then(
            (m) => m.HomeComponent
          ),
        title: 'Home',
      },
      {
        path: 'Cart',
        loadComponent: () =>
          import('./Components/cart/cart.component').then(
            (m) => m.CartComponent
          ),
        title: 'Cart',
      },
      {
        path: 'allorders',
        loadComponent: () =>
          import('./Components/allorders/allorders.component').then(
            (m) => m.AllordersComponent
          ),
        title: 'All Orders',
      },
      {
        path: 'forgetpassword',
        loadComponent: () =>
          import('./Components/forgetpassword/forgetpassword.component').then(
            (m) => m.ForgetpasswordComponent
          ),
        title: 'Forget Password',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('./Components/products/products.component').then(
            (m) => m.ProductsComponent
          ),
        title: 'Products',
      },
      {
        path: 'productdeteils/:id',
        loadComponent: () =>
          import('./Components/deteils/deteils.component').then(
            (m) => m.DeteilsComponent
          ),
        title: 'Products',
      },
      {
        path: 'brands',
        loadComponent: () =>
          import('./Components/brands/brands.component').then(
            (m) => m.BrandsComponent
          ),
        title: 'Brands',
      },
      {
        path: 'payment/:id',
        loadComponent: () =>
          import('./Components/payment/payment.component').then(
            (m) => m.PaymentComponent
          ),
        title: 'Payment',
      },
      {
        path: 'categories',
        loadComponent: () =>
          import('./Components/categories/categories.component').then(
            (m) => m.CategoriesComponent
          ),
        title: 'Categories',
      },
      {
        path: 'whislist',
        loadComponent: () =>
          import('./Components/whislist/whislist.component').then(
            (m) => m.WhislistComponent
          ),
        title: 'Whish List',
      },
    ],
  },
  //auth
  {
    path: '',
    loadComponent: () =>
      import('./layouts/auth-layout/auth-layout.component').then(
        (m) => m.AuthLayoutComponent
      ),
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      {
        path: 'login',
        loadComponent: () =>
          import('./Components/login/login.component').then(
            (m) => m.LoginComponent
          ),
        title: 'Login',
      },
      {
        path: 'register',
        loadComponent: () =>
          import('./Components/register/register.component').then(
            (m) => m.RegisterComponent
          ),
        title: 'Register',
      },
      {
        path: 'forget',
        loadComponent: () =>
          import('./Components/forgetpassword/forgetpassword.component').then(
            (m) => m.ForgetpasswordComponent
          ),
        title: 'ForgetPassword',
      },
    ],
  },
  //notfound
  {
    path: '**',
    loadComponent: () =>
      import('./Components/not-found/not-found.component').then(
        (m) => m.NotFoundComponent
      ),
    title: 'Not Found',
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
