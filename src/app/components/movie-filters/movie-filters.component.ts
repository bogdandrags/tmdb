import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { RatingConstants } from 'app/models/Constants';

@Component({
  selector: 'app-movie-filters',
  templateUrl: './movie-filters.component.html',
  styleUrls: ['./movie-filters.component.scss']
})
export class MovieFiltersComponent implements OnInit {

  @Input() rating: number;
  @Output() onChange: EventEmitter<any> = new EventEmitter();

  ratings: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.ratings = [];
    for (let r = RatingConstants.minRating; r <= RatingConstants.maxRating; r += RatingConstants.increment) {
      this.ratings.push(r);
    }
  }

  change(rating: number) {
    this.onChange.emit(rating);
  }
}
