import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { ICategory } from 'src/app/Models/icategory';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  newProd : IProduct = {} as IProduct;
  catList : ICategory[];
  constructor(private prdService : ProductsService) {

    this.catList =
    [{
      id:1, name:"laptop"
    },
    {
      id:2, name:"Tablet"
    },
    {
      id:3, name:"Mobile"
    }]

   }

  ngOnInit(): void {
  }

  AddProduct()
  {

      const observer : Observer<IProduct> = {

      next : (prd:IProduct) => alert("Added successfully"),
      error : (err:Error) => alert("Error occured"), // not recommended
      complete : () => {},
    }

    this.prdService.addProduct(this.newProd).subscribe(observer);

  }

}
