import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from 'vdoit'

import { LoginComponent} from 'vdoit'
import { HomeComponent } from 'vdoit'
import { AuthGuard } from 'vdoit'

const routes: Routes = [
  {path:'',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path :'user/home/:id', component:HomeComponent , canActivate : [AuthGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

