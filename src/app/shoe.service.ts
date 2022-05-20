import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Product } from "./product.model";

type ShoeResponse = {
  products: Product[];
}

@Injectable({
  providedIn: 'root'
})
export class ShoeService {
  constructor(private http: HttpClient) { }

  get shoeList() {
    return this.http.get<ShoeResponse>("../assets/products.json")
  }

  // What the JSON file looks like
  /* 
    products: [{
     id: 1,
     name: "Airwalks",
     imageUrl: "shoe-2.jpg",
     description: "Time-travel to 1997 and let's go Skateboarding!"
   }, {
     id: 2,
     name: "Xelero",
     imageUrl: "shoe-1.jpg",
     description: "You can make fun of these shoes all you want, but I can't even hear you from up here on these clouds I'm walking on."
   }, {
     id: 3,
     name: "Rothy's",
     imageUrl: "shoe-3.jpg",
     description: "Did you know you can put these in the washing machine?"
   }]*/
}
