import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ICartVM } from 'src/app/ViewModels/icart-vm';
import { Cart } from './Cart';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnChanges {

  prdList:IProduct[];
  orderTotalPrice:number = 0;
  @Input() sentCatID:number = 0;
  @Output() ItemBought : EventEmitter<ICartVM>;

  prdListodCat : IProduct[];

  constructor() {

    this.ItemBought = new EventEmitter<ICartVM>();
    this.prdList = [{
      id:100, name:"LenovoThinkPad", price:105650, quantity:100, imgURL:"https://picsum.photos/200/100" ,categoryID:1
    },
    {id:200, name:"Apple MacBook Laptop", price:200565, quantity:0, imgURL:"https://picsum.photos/200/100" ,categoryID:1
    },
    {id:300, name:"Lenovo Tab 2", price:365600, quantity:10, imgURL:"https://picsum.photos/200/100" ,categoryID:2
    },
    {id:400, name:"Samsung Tab", price:46560, quantity:2, imgURL:"https://picsum.photos/200/100" ,categoryID:2
    },
    {id:500, name:"Samsung Not 10", price:545400, quantity:0, imgURL:"https://picsum.photos/200/100" ,categoryID:3
    },
    {id:600, name:"Samsung S22", price:654500, quantity:1, imgURL:"https://picsum.photos/200/100" ,categoryID:3
    }];

    this.prdListodCat = this.prdList;
}
  ngOnChanges(changes: SimpleChanges): void {
    if(this.sentCatID == 0)
    {
      this.prdListodCat = this.prdList;
    }
    else{
      this.prdListodCat = this.prdList.filter(prd => prd.categoryID == this.sentCatID);
    }
  }

  ngOnInit(): void {
  }

  Buy(prdName:string, prdPrice:number, prdCount:string)
  {
      // this.orderTotalPrice += parseInt(count) * prdPrice;

      let cart = new Cart();

        cart.name = prdName;
        cart.count = +prdCount;
        cart.price = prdPrice;
        cart.total = +prdCount * prdPrice;

      this.ItemBought.emit(cart)
  }

  // changeCat()
  // {
  //   this.selectedCatId = 1;
  // }

  // getPrdListodCat()
  // {
  //   this.prdListodCat = this.prdList.filter(prd => prd.categoryID == this.selectedCatId);
  // }

}
