import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import MoviesService from './movies.service';
import Movie from '../models/Movie';

describe('MoviesService', () => {
    let service: MoviesService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [MoviesService]
        });

        service = TestBed.get(MoviesService);
    });

    it('should create an instance', () => {
        expect(service).toBeDefined();
    });

    it("sort movies by popularity", () => {
        let movies = [createMovie(1), createMovie(9), createMovie(7), createMovie(6), createMovie(2)];
        let sortedMovies = service.sortMovies(movies);

        expect(sortedMovies).toBeDefined();
        expect(sortedMovies.length).toEqual(5);
        expect(sortedMovies[0].popularity).toEqual(9);
        expect(sortedMovies[1].popularity).toEqual(7);
        expect(sortedMovies[2].popularity).toEqual(6);
        expect(sortedMovies[3].popularity).toEqual(2);
        expect(sortedMovies[4].popularity).toEqual(1);
    });

    it("filter movies by rating", () => {
        let movies = [createMovie(1), createMovie(9), createMovie(7), createMovie(6), createMovie(2)];
        let filteredMovies = service.filterMovies(movies, 2);

        expect(filteredMovies).toBeDefined();
        expect(filteredMovies.length).toEqual(4);

        filteredMovies = service.filterMovies(movies, 4);
        expect(filteredMovies).toBeDefined();
        expect(filteredMovies.length).toEqual(3);
        expect(filteredMovies[0].vote_average).toBeGreaterThanOrEqual(4);
        expect(filteredMovies[1].vote_average).toBeGreaterThanOrEqual(4);

        filteredMovies = service.filterMovies(movies, 10);
        expect(filteredMovies).toBeDefined();
        expect(filteredMovies.length).toEqual(0);
    });

    function createMovie(property: number) {
        let movie = new Movie();
        movie.popularity = property;
        movie.vote_average = property;
        return movie;
    };
});
