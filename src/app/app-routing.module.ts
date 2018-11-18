import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginHomeComponent} from 'login-lib';
import {AuthGuard} from 'login-lib';
import {SearchMoviesComponent} from 'movies-lib';


const routes: Routes = [
  { path: '', component: SearchMoviesComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginHomeComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
