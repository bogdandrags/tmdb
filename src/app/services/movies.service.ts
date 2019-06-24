import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import Genre from 'app/models/Genre';
import Movie from 'app/models/Movie';

@Injectable({
  providedIn: 'root'
})
export default class MoviesService {

  constructor(private http: HttpClient) {
  }

  async getMovies(): Promise<Movie[]> {
    let [genres, movies] = await Promise.all([this.getAllGenres(), this.getAllMovies()]);

    movies.forEach(m => {
      m.genres = m.genre_ids.map(id => genres.find(g => g.id == id).name);
    });

    movies = this.sortMovies(movies);
    return movies;
  }

  filterMovies(movies: Movie[], rating: number) {
    return movies.filter(m => m.vote_average >= rating);
  }

  public sortMovies(movies: Movie[]): Movie[] {
    return movies.sort((a, b) => { return b.popularity - a.popularity; });
  }

  private async getAllGenres(): Promise<Genre[]> {
    let url = `${environment.apiUrl}/genre/movie/list?api_key=${environment.apiKey}`;
    let result = await this.http.get<{ genres: Genre[] }>(url).toPromise();
    return result.genres;
  }

  private async getAllMovies(): Promise<Movie[]> {
    let url = `${environment.apiUrl}/movie/now_playing?api_key=${environment.apiKey}`;
    let result = await this.http.get<{ results: Movie[] }>(url).toPromise();
    return result.results;
  }
}
