'use strict';

export default class CartService {

    /*@ngInject*/
    constructor($http,notie) {
      this.$http = $http;
      this.notie = notie;
      this.updateCart();
    }
    updateCart(){
      this.$http.get('/api/users/cart')
      .then(response => {
        this.products = response.data;
        angular.forEach(this.products,(product,index)=>{
            this.products[index].totalPrice =product.quantity* product.price;
        });        
      });
    }
    addQuantity(product){
      ++product.quantity;
      product.totalPrice = product.quantity* product.price;
    }
    subtractQuantity(product){
      --product.quantity;
      product.totalPrice = product.quantity* product.price;
    }
    removeProduct(product){
      this.products = this.products.filter(item=>item._id!=product._id)
    } 

    addProduct(product) {
      this.notie.alert(1, 'Product has been added to cart.', 2);
      this.$http.post('/api/users/add-to-cart', product)
      .then(()=>{
      this.updateCart();
      })
    }

    deleteProduct(product) {
      this.$http.delete(`/api/products/${product._id}`);
    }
}
