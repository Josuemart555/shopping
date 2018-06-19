import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productsList: any[] = [];
  urlGetProducts: string = 'https://store-3a51c.firebaseio.com/Inventory';
  urlCategories: string = 'https://store-3a51c.firebaseio.com/Category'
  categoriesList: any[] = [];

  constructor( private http: Http ) { }

  getProducts(){

    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url = `${ this.urlGetProducts }.json`

    return this.http.get( url , { headers } )
                    .map( res => res.json() );

  }

  getCategories(){

    let headers = new Headers({
      'Content-Type':'application/json'
    });

    let url =`${ this.urlCategories }.json`

    return this.http.get( url , { headers } )
                    .map( res => res.json() );

  }

}
