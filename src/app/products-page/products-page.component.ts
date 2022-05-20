import { Component, OnInit } from "@angular/core";
import { Product } from "../product.model"
import { ShoeService } from "../shoe.service";

@Component({
  selector: "app-products-page",
  templateUrl: "./products-page.component.html",
  styleUrls: ["./products-page.component.css"]
})
export class ProductsPageComponent implements OnInit {
  products: Product[] = []
  error = false

  constructor(private shoeService: ShoeService) { }

  ngOnInit() {
    this.shoeService.shoeList.subscribe(response => {
      this.products = response.products;
      this.products.forEach(product => {
        product.imageUrl = `assets/${product.imageUrl}`
      })
    })
  }
}
