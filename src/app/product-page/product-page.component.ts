import { Component } from "@angular/core";
import { Product } from "../product.model"
import { ShoeService } from "../shoe.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-product-page",
  templateUrl: "./product-page.component.html",
  styleUrls: ["./product-page.component.css"]
})
export class ProductPageComponent {
  product?: Product;
  error = false;

  href: string = "";

  constructor(private shoeService: ShoeService, private router: Router) { }

  products: Product[] = [];

  ngOnInit() {
    this.shoeService.shoeList.subscribe(response => {
      this.products = response.products;
      this.products.forEach(product => {
        product.imageUrl = `assets/${product.imageUrl}`

        this.href = this.router.url.slice(this.router.url.length - 1);

        this.product = this.products.find(product => product.id === +this.href)
      })
    })
  }
}
