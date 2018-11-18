import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { EndpointService } from 'endpoint-lib';
import { Movie } from '../interfaces/movie';

const ROUTE = 'ROUTE-MOVIES';
const KEY_USER = 'ROUTE-KEY';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
};


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  baseUrl: string;
  apikey: string;
  favouriteMoviews: Movie[] = [];


  constructor(private http: HttpClient, private endpointService: EndpointService) {
    this.init();
    this.getMoviewsFromLocalStorage();
  }

  /**
   * Init the base Url
   */
  init(): void {
    this.baseUrl = this.endpointService.getRoute(ROUTE);
    this.apikey = this.endpointService.getRoute(KEY_USER);

  }
  /**
   * Get specific movie from the back
   */
  getMovie(title?: string, year?: string): Observable<Movie> {
    let uriWithParamrs = this.baseUrl;

    if (title) {
      uriWithParamrs = uriWithParamrs.concat('?t=' + title);
    }
    if (year) {
      uriWithParamrs = uriWithParamrs.concat('&y=' + year);
    }
    uriWithParamrs = uriWithParamrs.concat('&plot=full');
    uriWithParamrs = uriWithParamrs.concat(this.apikey);

    return this.http.get<Movie>(uriWithParamrs, headers);
  }

  /**
   * Add a movie to your favourites in localStorage if its not already in
   * @param movie movie added to favourites
   */
  addFavouriteMovie(movie: Movie): boolean {
    if (this.findWithAttr(this.favouriteMoviews, 'Title', movie.Title) === -1) {
      this.favouriteMoviews.push(movie);
      localStorage.setItem('favouriteMoviews', JSON.stringify(this.favouriteMoviews));
      return true;
    } else {
      return false;
    }

  }

  /**
   * Eliminate a movie from the favourites array in localStorage
   * @param movie movie to eliminate from favourites
   */
  eliminateFavouriteMovie(movie: Movie): void {
    this.favouriteMoviews.splice(this.favouriteMoviews.indexOf(movie), 1);
    localStorage.setItem('favouriteMoviews', JSON.stringify(this.favouriteMoviews));
  }

  /**
   * Retrieved the favourites array from localStorage
   */
  getMoviewsFromLocalStorage(): void {
    const retrievedData = localStorage.getItem('favouriteMoviews');
    if (retrievedData !== null) {
      this.favouriteMoviews = JSON.parse(retrievedData);
    }
  }

  /**
   * Return the favourite array as observable
   */
  getfavMovies(): Observable<Movie[]> {
    return of(this.favouriteMoviews);
  }


  /**
   * Find if the movie already exist in 1 array.
   * @param array movie array
   * @param attr attributte to check
   * @param value value to match
   */
  findWithAttr(array, attr, value) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i][attr] === value) {
        return i;
      }
    }
    return -1;
  }

}
