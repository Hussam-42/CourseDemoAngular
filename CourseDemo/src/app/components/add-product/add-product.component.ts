import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';
import { combineLatestInit } from 'rxjs/internal/observable/combineLatest';
import { IProduct } from 'src/app/Models/iproduct';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(private prdService : ProductsService) { }

  ngOnInit(): void {
  }

  AddProduct()
  {
    const NewPrd : IProduct = {
      id:700,
      name:"Hiso product",
      price:4000,
      quantity:3,
      imgURL:'',
      categoryID:2
    }

    const observer : Observer<IProduct> = {

      next : (prd:IProduct) => alert("Added successfully"),
      error : (err:Error) => alert("Error occured"), // not recommended
      complete : () => {},
    }

    this.prdService.addProduct(NewPrd).subscribe(observer);

  }

}
