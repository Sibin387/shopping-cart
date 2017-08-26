import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './cart.routes';
import CartService from './cart.service';

export class CartController {
  products = [];

  /*@ngInject*/
  constructor($http,CartService,notie) {
    this.notie = notie;
    this.$http = $http;
    this.cartService = CartService;
  }

  $onInit() {
  }

  checkout(){
    this.notie.alert(1, 'Your order has been placed.', 3);
  }
}

export default angular.module('shoppingCartApp.cart', [uiRouter])
  .config(routing)
  .component('cart', {
    template: require('./cart.html'),
    controller: CartController
  })
  .service('CartService', CartService)
  .name;
