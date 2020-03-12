import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Test } from './test.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

   URL = 'http://salimov.site/mahammad/frontend-test/shark-eater.json';

   prod = "http://localhost:3000/products"

  products:Test[];

  constructor(
    private dataService:DataService
  ){

  }
  ngOnInit(){
   return this.dataService.getData()
          .subscribe(data=> {
            this.products = data
            console.log(this.products)
          })
  }


  
}


