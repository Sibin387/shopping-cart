'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('cart', {
    url: '/cart',
    template: '<cart></cart>'
  });
}
