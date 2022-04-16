import { Component, OnInit } from '@angular/core';
import { StoreData } from 'src/app/Models/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  IsImgShown: boolean = true;
  StoreInfo:StoreData;

  constructor() {

    this.StoreInfo = new StoreData("ITI Store", "https://picsum.photos/350/150", ["Cairo", "Alex", "Qena"]);

  }

  ngOnInit(): void {
  }

  toggleImg()
  {
    this.IsImgShown = !this.IsImgShown;
  }

}
