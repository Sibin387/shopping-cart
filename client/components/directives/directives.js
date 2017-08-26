export default angular.module("shoppingCartApp.directives", [])
.directive('positiveNumbersOnly', function(){
  return {
    scope: {
      model: '=ngModel'
    },
    link: function(scope, element, attrs, modelCtrl) {
      scope.$watch('model', function() {
        if(parseInt(scope.model) < 1)
          scope.model = 1;
      });
    }
  };
}).name;