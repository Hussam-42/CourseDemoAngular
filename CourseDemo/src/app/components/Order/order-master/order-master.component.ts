import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/Models/icategory';
import { ICartVM } from 'src/app/ViewModels/icart-vm';
import { Cart } from '../product-list/Cart';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.scss']
})
export class OrderMasterComponent implements OnInit, AfterViewInit {

  @ViewChild('clientNameIpt') clientNameIptElem !: ElementRef;
  @ViewChild(ProductListComponent) ProductListComponentRef !: ProductListComponent;
  recievedCart:ICartVM;
  TotalCartItems:ICartVM[] = [];
  orderTotalPrice:number = 0;
  selectedCatId : number = 0;
  catList: ICategory[] = [];

  constructor(  ) {

    this.recievedCart = new Cart();

    this.catList = [{
      id:1, name:"laptop"
    },
    {
      id:2, name:"Tablet"
    },
    {
      id:3, name:"Mobile"
    }]
   }
  ngAfterViewInit(): void {
    this.clientNameIptElem.nativeElement.value = "hello";
  }

  ngOnInit(): void {
  }

  onItemBought(cart:ICartVM) : void
  {
    this.recievedCart.name = cart.name;
    this.recievedCart.count = cart.count;
    this.recievedCart.price = cart.price;
    this.recievedCart.total = cart.total;

    this.TotalCartItems.push(cart);

    this.orderTotalPrice += this.recievedCart.total;
  }

  removeItemFromCart(ItemName:string)
  {
    let RemovedItem = this.TotalCartItems.filter(item => item.name == ItemName);

    this.orderTotalPrice -= RemovedItem[0].total;

    this.TotalCartItems = this.TotalCartItems.filter(item => item.name != ItemName);

  }

  changeCount(ItemName:string, ItemCount:number, newValue:string){

    let EditedItem = this.TotalCartItems.find(item => item.name == ItemName) ?? new Cart()

    this.orderTotalPrice -= EditedItem.total;

    EditedItem.count = +newValue;

    EditedItem.total = EditedItem.count * EditedItem.price;

    this.orderTotalPrice += (EditedItem.price * EditedItem.count);

  }

  testViewChild() : void
  {
      this.ProductListComponentRef.prdList[0].quantity -= 1;
  }

}
