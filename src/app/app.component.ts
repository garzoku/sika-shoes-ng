import { Component, OnInit } from "@angular/core";
import { ShoeService } from "./shoe.service";
import { Shoe } from "./Shoe";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = 'angular-template';


  shoeList: Shoe[] = [];
  constructor(private shoeService: ShoeService) {
  }
  ngOnInit(): void {
    this.shoeService.shoeList.subscribe(response => {
      this.shoeList = response.products;
    })
  }
}
