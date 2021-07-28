import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { ListProductComponent } from './list-product/list-product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginComponent } from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AuthGuardService} from './auth/auth-guard.service';
import {AuthService} from './auth/auth.service';
import {JwtHelperService, JwtModule} from '@auth0/angular-jwt';


// tslint:disable-next-line:variable-name
const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: 'nguyetmoon',
    // whitelistedDomains: yourWhitelistedDomains
  }
};

@NgModule({
  declarations: [
    AppComponent,
    ListProductComponent,
    AddProductComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot(JWT_Module_Options)
  ],
  providers: [AuthGuardService, AuthService, JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
