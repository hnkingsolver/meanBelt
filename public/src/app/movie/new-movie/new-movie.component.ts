import { Component, OnInit } from "@angular/core";
import { HttpService } from "../../http.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-new-movie",
  templateUrl: "./new-movie.component.html",
  styleUrls: ["./new-movie.component.scss"],
})
export class NewMovieComponent implements OnInit {
  movies = [];
  newMovie: any;
  error = "";
  errorReview = "";

  constructor(private _httpService: HttpService, private _router: Router) {}

  ngOnInit() {
    this.getMoviesFromService();

    this.newMovie = {
      title: "",
      rate: {
        yourName: "",
        stars: "",
        comment: "",
      },
    };
  }

  getMoviesFromService() {
    let observable = this._httpService.getMovies();
    observable.subscribe((data) => {
      this.movies = data["data"];
    });
  }

  onSubmit() {
    let observable = this._httpService.addMovie(this.newMovie);
    observable.subscribe((data: any) => {
      if (data.error) {
        this.error = data.error.errors;
        this._router.navigate(["movies/new"]);
      } else {
        this.getMoviesFromService();
        this._router.navigate([""]);
      }
    });
  }
}