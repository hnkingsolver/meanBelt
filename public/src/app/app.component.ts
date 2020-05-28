import { Component } from '@angular/core';
import { HttpService } from './http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pocket Potatos';
  movies: any = [];
  constructor(private _httpService: HttpService, private router: Router) {}

  ngOnInit() {
    this.getMoviesFromService();
  }

  getMoviesFromService() {
    let observable = this._httpService.getMovies();
    observable.subscribe((data) => {
      this.movies = data["data"];
    });
  }

  onDelete(id) {
    const observable = this._httpService.deleteMovie(id);
    observable.subscribe((data) => {
      this.router.navigate([""]);
    });
  }
}
