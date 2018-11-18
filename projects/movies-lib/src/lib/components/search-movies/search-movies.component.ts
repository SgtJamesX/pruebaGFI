import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie';
import { MoviesService } from '../../services/movies.service';

import { User } from '../../interfaces/user';
import { AuthenticationService } from 'login-lib';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'mov-search-movies',
  templateUrl: './search-movies.component.html',
  styleUrls: ['./search-movies.component.css']
})
export class SearchMoviesComponent implements OnInit {

  title: string;
  year: string;
  displayDetails = false;
  movies: Movie[] = [];
  cols: any[] = [];
  favouritesMoviews: Movie[];
  selectedMovie: Movie = null;

  user: User;

  constructor(private moviesService: MoviesService, private authenticationService: AuthenticationService,
    private messageService: MessageService) { }

  /**
   * Init the component
   */
  ngOnInit(): void {
    this.cols = [
      { field: 'Title', header: 'Title' },
      { field: 'Genre', header: 'Genre' },
      { field: 'Language', header: 'Language' },
      { field: 'Metascore', header: 'Metascore' },
      { field: 'Released', header: 'Released' },
    ];
    this.getFavouriteMovies();
    this.title = '';
    this.year = '';

    this.getUserFromLocalStorage();

  }

  /**
   * Petition to the movies service to find a movie
   */
  searchMovie(): void {
    this.moviesService.getMovie(this.title, this.year).subscribe(data => {
      if (data.Response === 'False') {
        this.messageService.add({ severity: 'error', summary: 'Search Movie', detail: 'Movie not Found' });
      } else {
        this.movies.shift();
        this.movies.push(data);
        this.messageService.add({
          severity: 'success', summary: 'Search Movie',
          detail: 'Movie ' + data.Title + ' Found'
        });
      }
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Search Movie', detail: error });
    });
  }

  /**
   * Recover the current user from local Storage
   */
  getUserFromLocalStorage(): void {
    const retrievedData = localStorage.getItem('currentUser');
    if (retrievedData !== null) {
      this.user = JSON.parse(retrievedData);
    }
  }

  /**
   * Subscription to the favouritesmovies observable in movies service
   */
  getFavouriteMovies(): void {
    this.moviesService.getfavMovies()
      .subscribe(favMovies => this.favouritesMoviews = favMovies);
  }

  /**
   * Open the modal to show the details of the selected movie
   * @param movie movie to show detail
   */
  detailMovie(movie: Movie): void {
    this.selectedMovie = movie;
    this.displayDetails = true;
  }

  /**
   * Add the selected movie to favourites
   * @param movie movie to add to favourites
   */
  addFavourite(movie: Movie): void {
    if (this.moviesService.addFavouriteMovie(movie)) {
      this.messageService.add({
        severity: 'success', summary: 'Add Favourites',
        detail: 'Movie ' + movie.Title + ' Added to favourites'
      });
    } else {
      this.messageService.add({
        severity: 'error', summary: 'Add Favourites',
        detail: 'Movie ' + movie.Title + ' its already in your favourites!'
      });
    }

  }

  /**
   * Remove the selected movie from your favourites
   * @param movie movie to remove from favourites
   */
  removeFavourite(movie: Movie): void {
    this.moviesService.eliminateFavouriteMovie(movie);
    this.messageService.add({
      severity: 'success', summary: 'Remove Favourite',
      detail: 'Movie ' + movie.Title + ' Removed from favourites'
    });
  }

  /**
   * Reset the inputs
   */
  resetForm(): void {
    this.title = '';
    this.year = '';
  }

  /**
   * logout from the application.
   */
  logout(): void {
    this.authenticationService.logout();
  }

}
