'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('admin', {
    url: '/admin',
    template: require('./admin.html'),
    controller: 'AdminController',
    controllerAs: 'admin',
    authenticate: 'admin'
  }).state('add-product', {
    url: '/add-product',
    template: require('./add/add.html'),
    controller: 'AddProductController',
    controllerAs: 'addProduct',
    authenticate: 'admin'
  });
}
