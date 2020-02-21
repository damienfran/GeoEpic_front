import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestingComponent } from './testing/testing.component'
import {LoginComponent} from './login/login.component'
import {ScoreComponent} from './score/score.component'

const routes: Routes = [
{path:"testing", component : TestingComponent},
{path:"score", component : ScoreComponent},
{path: "**", component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
