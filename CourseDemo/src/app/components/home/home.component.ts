import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Subscription } from 'rxjs';
import { PromotionAdsService } from 'src/app/Services/promotion-ads.service';
import { StoreData } from 'src/app/ViewModels/store-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  IsImgShown: boolean = true;
  StoreInfo:StoreData;
  subscription !: Subscription;

  constructor(private proService : PromotionAdsService) {
    this.StoreInfo = new StoreData("ITI Store", "https://picsum.photos/350/150", ["Cairo", "Alex", "Qena"]);

  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {

    // this.subscription = this.proService.getScheduledAds(1).subscribe({

    //   next: (data) => {console.log(data);},
    //   error: (err) => {console.log(err);},
    //   complete: () => {console.log("Completed");}
    // });

    // this.subscription = this.proService.getSerialAds().subscribe(

    //   (data) => console.log(data)
    // );

    this.subscription = this.proService.getScheduledAds(1).pipe(

      filter(prd => prd.includes("Friday")),
      map( prd=> "Ad: " + prd)

    ).subscribe({

      next: (data) => {console.log(data);},
      error: (err) => {console.log(err);},
      complete: () => {console.log("Completed");}
    });
  }

  toggleImg()
  {
    this.IsImgShown = !this.IsImgShown;
  }

}
