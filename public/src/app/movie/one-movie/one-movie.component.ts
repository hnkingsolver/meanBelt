import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-one-movie',
  templateUrl: './one-movie.component.html',
  styleUrls: ['./one-movie.component.scss']
})
export class OneMovieComponent implements OnInit {
  movie_id: string;
  movie_data: any;

  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService
  ) { }

  ngOnInit() {
    this.movie_id = this.route.snapshot.paramMap.get("id");
    this.oneMovie();
  }

  oneMovie() {
    let observable = this.httpService.oneMovie(this.movie_id);
    observable.subscribe((data) => {
      this.movie_data = data;
      console.log(data)
    });
  }

  onDelete(id) {
    const observable = this.httpService.deleteMovie(id);
    observable.subscribe((data) => {
      this.router.navigate([""]);
    });
  }

}
