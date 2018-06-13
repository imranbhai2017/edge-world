angular.module('app.pages.myOrders.controller',[])
.config(function ($stateProvider) {
    $stateProvider
    .state(
        'pages.myOrders',{
            url:"/myOrders",
            views:{
                'content': {
            templateUrl: "app/pages/myOrders/myOrders.controller.html",
            controller: "myOrdersController as myOrders" 
                }} 
      })
    })

.controller('myOrdersController',function($rootScope,$scope){
    var myOrders=this;
    var style1;
    $scope.dat=['karthik','kk24','kark'];
    $scope.style1='red'
    $scope.style2='underline'

    $scope.getStyle = function(){
        return 'red';
    }
   /*  $scope.$on('myEventID', function(event, data) {
        //console.log(data.dataObj.EmpId)
        var EmpID;
        $scope.EmpID=data.dataObj.EmpId;

        
    }) */
    
});