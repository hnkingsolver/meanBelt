import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getMovies() {
    return this._http.get("/show");
  }

  addMovie(newMovie) {
    return this._http.post("/add", newMovie);
  }

  oneMovie(id) {
    return this._http.get("/show/" + id);
  }

  rateMovie(id, comment) {
    return this._http.post(`/create/${id}/rate`, comment);
  }

  //test
  createComment(id, comment) {
    return this._http.post(`/create/${id}/comment`, comment);
  }
  //end test

  deleteMovie(id) {
    return this._http.delete("/delete/" + id);
  }
}
