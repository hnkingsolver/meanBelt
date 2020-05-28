import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  movie_id: string;
  movie_data: any;
  new_rating = {
    yourName: "",
    stars: "",
    comment: "",
  };
  errors = [];
  constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpService) { }

  ngOnInit() {
    this.movie_id = this.route.snapshot.paramMap.get("id");
    this.oneMovie();
  }
  oneMovie() {
    let observable = this.httpService.oneMovie(this.movie_id);
    observable.subscribe((data) => {
      this.movie_data = data;
    });
  }

  create_Rating() {
    console.log('Error here')
    let observable = this.httpService.createComment(
      this.movie_id,
      this.new_rating
    );
    observable.subscribe((data) => {
      this.errors = [];
      if (data["ServerMessage"] == "Error") {
        for (var key in data["Error"]["errors"]) {
          this.errors.push(data["Error"]["errors"][key]["message"]);
          console.log(this.errors);
        }
      } else {
        this.new_rating = {
          yourName: "",
          stars: "",
          comment: "",
        };
        this.router.navigate(["/movies/"+ this.movie_id ]);
      }
    });
  }

}
