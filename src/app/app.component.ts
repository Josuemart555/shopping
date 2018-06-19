import { Component } from '@angular/core';
import { ProductService } from '../app/providers/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listProducts: any[] = [];
  listProductsK: any[] = [];
  categoriesList: any[] = [];
  categoriesListK: any[] = []
  category: any = {
    id: 0
  };
  name: string = null;

  constructor(
                private _pS: ProductService
             ){

              this._pS.getProducts().subscribe(
                data =>{
                  this.listProducts = data;
                  this.listProductsK = this.convertKeysProducts( this.listProducts );
                  console.log('Products =',this.listProductsK)
                })
              this._pS.getCategories().subscribe(
                data =>{
                  this.categoriesList = data;
                  this.categoriesListK = this.convertKeysCategory( this.categoriesList );
                  console.log('categories =',this.categoriesListK)
                })

  }

  convertKeysProducts(value: any): any{

    let keys: any [] = [];
    for (let key in value) {
        keys.push({ key: key, product: value[key]});
    }
    return keys;
  }

  convertKeysCategory(value: any): any{

    let keys: any [] = [];
    for (let key in value) {
        keys.push({ key: key, category: value[key]});
    }
    return keys;
  }

  ShowCate(){

    if (this.category.id == '-1') {
      this.name = null;
      return;
    }

    for (let category of this.categoriesListK) {
      if ( this.category.id == category.key  ) {
        this.name = category.category.name;
      }
    }

  }


}
