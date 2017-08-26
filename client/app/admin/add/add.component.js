import angular from 'angular';
import uiRouter from 'angular-ui-router';

export default class AddProductController {

  /*@ngInject*/
  constructor($http, socket,CartService,$state) {
    this.$http = $http;
    this.product = {};
    this.$state = $state;
    this.categories = ["fashion", "laptops", "mobiles"];
  }

  $onInit() {
  }

  add() {
    if(this.product) {
      this.$http.post('/api/products',this.product);
      this.product = {};
      this.$state.go('admin');
    }
  }
}
