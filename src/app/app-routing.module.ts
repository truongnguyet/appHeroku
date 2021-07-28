import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {ListProductComponent} from './list-product/list-product.component';
import {AddProductComponent} from './add-product/add-product.component';
import {AuthGuardService as AuthGuard} from './auth/auth-guard.service';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: 'list', component: ListProductComponent},
  {path: 'add', component: AddProductComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
