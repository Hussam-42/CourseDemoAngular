import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductsService {

  PrdList : IProduct[];

  constructor() {

    this.PrdList = [{
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

   }

   getAllProducts() : IProduct[]
   {

      return this.PrdList;

   }

   getProductByCatID(cId:number) : IProduct[]
   {
      if(cId == 0)
      {
        return this.PrdList;
      }
      else{
        return this.PrdList.filter(prd => prd.categoryID == cId);
      }
   }

   getProductById(pID:number) : IProduct | null
   {

      let foundPrd =  this.PrdList.find(prd => prd.id == pID);

      return foundPrd? foundPrd : null;

   }

   getAllPrdIds()
   {
      return this.PrdList.map(prd => prd.id);
   }

}
