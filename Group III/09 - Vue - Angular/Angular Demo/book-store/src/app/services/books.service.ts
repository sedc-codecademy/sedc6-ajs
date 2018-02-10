import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BooksService {
  private baseUrl = "http://openlibrary.org/"
  constructor(private http:HttpClient) { }

  searchByQuery(text:string){
    let method = "search.json";
    return this.http.get(this.baseUrl + method + "?title=" + text).toPromise();
  }

}
