import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.scss']
})
export class AllMoviesComponent implements OnInit {
  movies = [];
  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.getMoviesFromService();
  }
  getMoviesFromService() {
    let observable = this._httpService.getMovies();
    observable.subscribe((data) => {
      this.movies = data["data"];
    });
  }

}
