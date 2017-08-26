'use strict';

import angular from 'angular';
import routes from './admin.routes';
import AdminController from './admin.controller';
import AddProductController from './add/add.component';

export default angular.module('shoppingCartApp.admin', ['shoppingCartApp.auth', 'ui.router'])
  .config(routes)
  .controller('AdminController', AdminController)
  .controller('AddProductController', AddProductController)
  .name;
