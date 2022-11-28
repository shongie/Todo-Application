import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class TodoService {

   baseUrl = "http://localhost:1000/api/";

  constructor(private http: HttpClient) {}

  createTitle(titleBody: any) {
    return this.http.post(`${this.baseUrl}createTitle`, titleBody);
  }

  getAllTitles() {
    return this.http.get(`${this.baseUrl}getAll`);
  }

  deleteTittles(tittle_id: Number) {
    return this.http.delete(`${this.baseUrl}delete/${tittle_id}`);
  }

  updateTittles(tittle_id: Number,title: any) {
    return this.http.put(`${this.baseUrl}update/${tittle_id}`, title);
  }
}
