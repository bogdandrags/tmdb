
export default class Movie {

  // movie properties:
  // - displayed: title, genres and poster image.
  // - ordered by: popularity
  // - filterable by: rating

  public title: string;

  public genre_ids: number[];

  public genres: string[];

  public poster_path: string;

  public popularity: number;

  public vote_average: number;
}
