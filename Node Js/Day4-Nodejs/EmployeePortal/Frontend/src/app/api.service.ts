import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  retreiveData(){
    return this.http.get(this.apiUrl);
  }
}
