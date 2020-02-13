import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component'
import {LoginComponent} from './login/login.component'

const routes: Routes = [
{path:"testing", component : TestingComponent},
{path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
