import { Component, OnInit, Input } from '@angular/core';
import { RatingConstants } from 'app/models/Constants';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.component.html',
  styleUrls: ['./movie-rating.component.scss']
})
export class MovieRatingComponent implements OnInit {

  @Input() rating: number = 0;
  stars: string[];

  constructor() { }

  ngOnInit() {
    this.stars = new Array(RatingConstants.maxRating).fill(0).map((x, i) => {
      if (this.rating >= i+1) return 'star'; // full star
      if (this.rating > i && this.rating < i+1) return   'star_half'; // half star
      return 'star_border'; // empty star
    });
  }
}

