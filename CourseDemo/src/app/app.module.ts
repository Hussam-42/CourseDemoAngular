import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/Order/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { LightBoxDirective } from './Directives/light-box.directive';
import { USDtoEGPPipe } from './Pipes/usdto-egp.pipe';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { ErrorComponent } from './components/error/error.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { LoginUserComponent } from './components/login-user/login-user.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LogoutUserComponent } from './components/logout-user/logout-user.component';
import { importType } from '@angular/compiler/src/output/output_ast';
import { AddProductComponent } from './components/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    ProductListComponent,
    LightBoxDirective,
    USDtoEGPPipe,
    OrderMasterComponent,
    ErrorComponent,
    MainLayoutComponent,
    LoginUserComponent,
    ProductDetailsComponent,
    LogoutUserComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
