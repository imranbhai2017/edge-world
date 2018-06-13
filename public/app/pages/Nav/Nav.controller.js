angular.module('app.pages.Nav.controller', [
  
    
])

        .controller('navController',function($scope,$rootScope){
            var nav=this;
            $scope.searchFunc = function(){
                //console.log($scope.searchData)
                $rootScope.$emit('myEvent', $scope.searchData);
            }

        });