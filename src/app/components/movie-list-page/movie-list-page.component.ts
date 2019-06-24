import { Component, OnInit } from '@angular/core';
import MoviesService from 'app/services/movies.service';
import Movie from 'app/models/Movie';
import { RatingConstants } from 'app/models/Constants';

@Component({
  selector: 'app-movie-list-page',
  templateUrl: './movie-list-page.component.html',
  styleUrls: ['./movie-list-page.component.scss']
})
export class MovieListPageComponent implements OnInit {

  rating: number = RatingConstants.defaultRating;
  movies: Movie[];
  private allMovies: Movie[];

  constructor(private service: MoviesService) {
  }


  async ngOnInit() {
    this.allMovies = await this.service.getMovies();
    this.applyFilter(this.rating);
  }

  applyFilter(rating: number) {
    this.rating = rating;
    this.movies = this.service.filterMovies(this.allMovies, this.rating);
  }
}
