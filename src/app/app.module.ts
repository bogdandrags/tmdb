import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListPageComponent } from './components/movie-list-page/movie-list-page.component';
import { MovieFiltersComponent } from './components/movie-filters/movie-filters.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieTileComponent } from './components/movie-tile/movie-tile.component';
import { MovieRatingComponent } from './components/movie-rating/movie-rating.component';

@NgModule({
  declarations: [
    AppComponent,

    MovieFiltersComponent,
    MovieListComponent,
    MovieListPageComponent,
    MovieTileComponent,
    MovieRatingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
