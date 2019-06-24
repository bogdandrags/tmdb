import { Component, OnInit, Input } from '@angular/core';
import Movie from 'app/models/Movie';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-movie-tile',
  templateUrl: './movie-tile.component.html',
  styleUrls: ['./movie-tile.component.scss']
})
export class MovieTileComponent implements OnInit {

  @Input() movie: Movie;
  basePath: string = `${environment.imagesUrl}/w154`;

  constructor() { }

  ngOnInit() {
  }

}
