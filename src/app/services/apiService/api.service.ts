import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'https://glacial-escarpment-40412.herokuapp.com';
  
  constructor(private http:HttpClient) { }

  public getAllSongs(){
    return this.http.get(`${this.url}/songs`);
  }
}
