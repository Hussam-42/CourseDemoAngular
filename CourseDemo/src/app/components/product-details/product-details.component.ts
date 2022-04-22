import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { last, retry } from 'rxjs';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductsService } from 'src/app/Services/static-products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  prdID : number = 0;
  prd : IProduct | null = null;
  prdArrIds : number[] = [];
  CurrentID : number = 0;

  constructor(private prdService : StaticProductsService, private router : Router, private activatedRoute : ActivatedRoute, private location : Location) { }

  ngOnInit(): void {

    // this.prdID = Number(this.activatedRoute.snapshot.paramMap.get("id"));
    // this.prd = this.prdService.getProductById(this.prdID);

    this.prdArrIds = this.prdService.getAllPrdIds();

    console.log(this.prdArrIds)

    this.activatedRoute.paramMap.subscribe( (paramMap) => {

      this.prdID = Number(paramMap.get("id"));
      this.prd = this.prdService.getProductById(this.prdID);

    });

  }

  goBack() : void
  {
    this.location.back();
  }

  goPrevious() : void
  {
      let CurrentIDIndex = this.prdArrIds.findIndex( ele => ele == this.prdID );

      let lastPrdId;
      if(CurrentIDIndex > 0)
        lastPrdId = this.prdArrIds[CurrentIDIndex - 1];
      else
        lastPrdId = this.prdArrIds[CurrentIDIndex];

      this.router.navigate(["/product-details", lastPrdId]);
  }

  goNext() : void
  {
      let CurrentIDIndex = this.prdArrIds.findIndex( ele => ele == this.prdID );

      let nextPrdId;
      if(CurrentIDIndex < this.prdArrIds.length - 1)
          nextPrdId = this.prdArrIds[CurrentIDIndex + 1];
      else
          nextPrdId = this.prdArrIds[CurrentIDIndex];

      this.router.navigate(["/product-details", nextPrdId]);
  }

}
