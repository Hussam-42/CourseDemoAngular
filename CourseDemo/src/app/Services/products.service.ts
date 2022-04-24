import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  httpOptions;

  constructor(private httpClient : HttpClient) {

    this.httpOptions = {

      headers:  new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'my-auth-token'
      })

    }
  }

  getAllProducts() : Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products`);
  }

  getProductById(productId:number) : Observable<IProduct>
  {
    return this.httpClient.get<IProduct>(`${environment.APIURL}/products/${productId}`);
  }

  getProductsByCatId(catId:number) : Observable<IProduct[]>
  {
    return this.httpClient.get<IProduct[]>(`${environment.APIURL}/products?categoryID=${catId}`);
  }

  addProduct(prd : IProduct)
  {
      return this.httpClient.post<IProduct>(`${environment.APIURL}/products`, JSON.stringify(prd), this.httpOptions)
                 .pipe(
                    retry(2),
                    catchError(this.handleError)
                 );
  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.

      console.error('An error occurred:', error.error);
    }
    else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.

      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
