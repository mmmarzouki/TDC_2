import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  path:String
  allPaths:String[] = ["../../../assets/img/dog_food.jpg","../../../assets/img/shirt.jpg","../../../assets/img/coca.png"]
  
  constructor() { }

  ngOnInit() {
    let random=Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    this.path = this.allPaths[random];
  }

}
