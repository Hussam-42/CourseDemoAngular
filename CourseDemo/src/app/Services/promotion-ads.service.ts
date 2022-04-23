import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromotionAdsService {

  prdList : string[];

  constructor() {
    this.prdList = ["Big Discount", "Checkout White Friday Offers" ,"", "Special White Friday Offers"]
   }

  getScheduledAds(intervalInSeconds : number)
  {
      return new Observable<string>((observer) => {

        let counter = 0;
        let adsTimer = setInterval(()=>{
          // console.log("inside interval");
          if(counter == this.prdList.length)
          {
            observer.complete();
          }

          if(this.prdList[counter] == "")
          {
            observer.error();
          }

          observer.next(this.prdList[counter]);
          counter++;

        }, intervalInSeconds * 1000);

        return {
          unsubscribe()
          {
              clearInterval(adsTimer);
              // console.log("Ended");
          }
        }
      })
  }

  getSerialAds() : Observable<string>
  {
    return from(this.prdList);
  }
}
