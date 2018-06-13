angular.module('app.pages.home',['ui.router',
'app.pages.services.commonService'

])
.config(function ($stateProvider) {
    $stateProvider.state('pages.home',{
        url: "/home",
        views:{
            'content': {
                templateUrl: "app/pages/home/home.html",
                controller: "homeController as home"
            }
        }
    })
})
.controller('homeController',function(CommonData,$scope,$rootScope){
    var home=this;
    var num;
    home.gridSize = 3;
    home.gridClass = "glyphicon glyphicon-th";
    var resource=CommonData.getdata();
        resource.$promise.then(function(response)
        {
            //$scope.dataa=response.result;
            home.result = response;
            //console.log(home.result)
        })

    home.getGridClass = function(){
        if(home.gridSize === 3){
            home.gridSize = 4;
            home.gridClass = "glyphicon glyphicon-th-large";
        }else{
            home.gridSize = 3;
            home.gridClass = "glyphicon glyphicon-th";
        }
    }

    
    $rootScope.$on('myEvent', function(event, searchData){
        console.log(searchData)
        var i;
        for (i=0;i<=home.result.productList.length;i++) {
            if(home.result.productList[i].phonename === searchData){
                console.log("test")
                $scope.searchList+=productList[i];
            }
        }

        
    })
 
})
    
    
    
