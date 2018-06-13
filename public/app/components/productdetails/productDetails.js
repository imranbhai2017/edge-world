angular.module('app.components.productDetails.directive',[])
.directive('productDetails', function ($compile) {
    return {
        restrict:                   'E',
        scope: {
            productDt:          '=',
            gridSize:                   '=',
        },
        templateUrl: 'app/components/productdetails/productDetails.html',
        bindToController: true,
        controllerAs: 'product',
        controller: function($scope) {
            var product = this;
           // var productDt=home.result;
             product.getGridClass = function(){
                 if(product.gridSize === 3){
                     return 'col-lg-'+4;
                 }else{
                     return 'col-lg-'+6;
                 }
                
             }
            
       }
    }
});
