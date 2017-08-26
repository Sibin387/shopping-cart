'use strict';

export default class AdminController {
  /*@ngInject*/
  constructor($http,$state) {
  	this.$http = $http;
    this.$state = $state;
  }
  updateProducts(){
    this.$http.get('/api/products')
    .then(response => {
      this.products = response.data;
    });
  }
  add(){
      this.$state.go('add-product');
  }
  $onInit() {
    this.updateProducts();
  }

  delete(product) {
    this.$http.delete(`/api/products/${product._id}`)
    .then(()=>{
      this.updateProducts();
    });
  }
}
