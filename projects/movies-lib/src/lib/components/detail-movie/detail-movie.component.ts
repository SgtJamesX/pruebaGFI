import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/movie';

@Component({
  selector: 'mov-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.css']
})
export class DetailMovieComponent implements OnInit {

  @Input() movie: Movie;

  constructor() { }

  ngOnInit() {
  }

}
