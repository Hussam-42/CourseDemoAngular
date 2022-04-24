import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ErrorComponent } from './components/error/error.component';
import { HomeComponent } from './components/home/home.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [

  {path: '' , component: MainLayoutComponent, children: [

    { path: '', redirectTo: '/Home', pathMatch: 'full'},
    { path: 'Home', component: HomeComponent},
    { path: 'Products', component: ProductListComponent},
    { path: 'Product/Add', component: AddProductComponent},
    { path: 'Order', component: OrderMasterComponent, canActivate : [AuthGuard] },
    //, data : {target : "/order"}
    { path: 'product-details/:id', component: ProductDetailsComponent},
  ]},

  { path: 'login-user', component: LoginUserComponent},
  { path: 'logout-user', component: LoginUserComponent},
  { path: '**', component: ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
