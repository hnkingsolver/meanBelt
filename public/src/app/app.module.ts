import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllMoviesComponent } from './movie/all-movies/all-movies.component';
import { OneMovieComponent } from './movie/one-movie/one-movie.component';
import { EditMovieComponent } from './movie/edit-movie/edit-movie.component';
import { DeleteMovieComponent } from './movie/delete-movie/delete-movie.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { NewMovieComponent } from './movie/new-movie/new-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    AllMoviesComponent,
    OneMovieComponent,
    EditMovieComponent,
    DeleteMovieComponent,
    ReviewsComponent,
    NewMovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
