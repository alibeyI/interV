import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Test } from './test.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

   private apiUrl = "/mahammad/frontend-test/shark-eater.json";

   private Url = '/mahammad/frontend-test/shark-eater.json';

  constructor(
    private http : HttpClient
  ) { }
getData(){
  return this.http.get<Test[]>(this.apiUrl)
}

  
}
