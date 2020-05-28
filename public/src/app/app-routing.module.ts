import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AllMoviesComponent } from './movie/all-movies/all-movies.component';
import { OneMovieComponent } from './movie/one-movie/one-movie.component';
import { EditMovieComponent } from './movie/edit-movie/edit-movie.component';
import { NewMovieComponent } from './movie/new-movie/new-movie.component';


const routes: Routes = [
  { path: "", redirectTo: "/movies", pathMatch: "full" },
  {path: "movies",component: AllMoviesComponent},
  { path: "movies/new", component: NewMovieComponent },
  { path: "movies/:id", component:  OneMovieComponent},
  { path: "movies/:id/rate", component: EditMovieComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
