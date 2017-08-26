import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {

  /*@ngInject*/
  constructor($http, socket,CartService) {
    this.$http = $http;
    this.cartService = CartService;
    this.socket = socket;
    this.priceIncludes = [];
    this.ranges = [];
    this.selectedCatgories = [];
  }

  $onInit() {
    this.$http.get('/api/products')
    .then(response => {
      this.products = response.data;
      this.products.map(product=>{
        if(product.image.indexOf('://')>1){

        }else{
          product.image = 'assets/img/'+product.image;
        }
        return product;
      });
    });
  }


  deleteThing(thing) {
    this.$http.delete(`/api/things/${thing._id}`);
  }

  includeCategory(category){
    var i = $.inArray(category, this.selectedCatgories);
    if (i > -1)
      this.selectedCatgories.splice(i, 1);
    else
      this.selectedCatgories.push(category);
    console.log(this.selectedCatgories);
  }
  includePrice(pricerange) {
    var i = $.inArray(pricerange, this.priceIncludes);
    if (i > -1) {
      this.priceIncludes.splice(i, 1);
      this.ranges = pricerange.split(',').splice(i, 1);
    } else {
      this.priceIncludes.push(pricerange);
    }
    var arrayString = this.priceIncludes.join();
    var rangeArray = arrayString.split(',')
    this.maxRange = function( rangeArray ){
      return Math.max.apply( Math, rangeArray );
    };
    this.minRange = function( rangeArray ){
      return Math.min.apply( Math, rangeArray );
    };
    this.ranges[1] = this.maxRange(rangeArray);
    this.ranges[0] = this.minRange(rangeArray);
    console.log(this.ranges);
  }
}

export default angular.module('shoppingCartApp.main', [uiRouter])
.config(routing)
.component('main', {
  template: require('./main.html'),
  controller: MainController
})
.name;
