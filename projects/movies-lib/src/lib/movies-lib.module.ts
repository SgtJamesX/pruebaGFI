import { NgModule } from '@angular/core';
import { MoviesLibComponent } from './movies-lib.component';
import { SearchMoviesComponent } from './components/search-movies/search-movies.component';
import { PrimeNgModule } from './prime-ng.module';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { MessageService } from 'primeng/api';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [MoviesLibComponent, SearchMoviesComponent, DetailMovieComponent],
  imports: [
    PrimeNgModule,
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,
    ToastModule
  ],
   providers: [
    MessageService],
  exports: [MoviesLibComponent]
})
export class MoviesLibModule { }
