import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitleserviceService } from '../titleservice.service';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component: PagesComponent,canActivateChild:[TitleserviceService], children:
      [
        { path: '', redirectTo: 'login', pathMatch: 'full' },
        { path: 'login', component: LoginComponent,data:{title:"Log-In Page"} },
        { path: 'register', component: RegisterComponent,data:{title:"Register Page"} }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
