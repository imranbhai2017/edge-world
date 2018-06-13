angular.module('app.components.orderList.directive',[])
.directive('orderList', function ($compile) {
    return {
        restrict:                   'E',
        scope: {
            orderData:          '=',
                          
        },

        templateUrl: 'app/components/orderList/orderList.html',
        bindToController: true,
        controllerAs: 'order',
        controller: function($scope) {

        }
    }
})

