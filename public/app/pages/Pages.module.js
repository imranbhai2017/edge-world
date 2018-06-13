angular.module('app', [
    'ui.router',
    'app.pages.header',
    'app.pages.Nav.controller',
    'app.pages.home',
    'app.pages.myOrders.controller',
    'app.pages.about.controller',
    'app.pages.services.commonService',
    'app.components.productDetails.directive',
    'app.components.ratingStar.directive',
    'app.pages.login.controller'
    

])
.config(function ($stateProvider) {
    $stateProvider
    .state("login", {
        url: '',
        templateUrl: 'app/pages/login/login.controller.html',
        controller: 'loginController as login'

    })
 .state("pages", {
        url: "",
        views: {
			'': {
				templateUrl:'app/pages/layout.html',
				controller: 'layoutController as layout'
            },
            

              /* 'header@pages':{
                templateUrl: 'app/pages/header/header.html',
				controller: 'headerController as header'
            }, */
            'Nav@pages':{
                templateUrl: 'app/pages/Nav/Navbar.html',
				controller: 'navController as nav'
            } 
        }
        })
        
})
    
    
    
    

.controller('layoutController', function ($scope) {
    var layout = this;
    $scope.$on('myEvent', function(event, data) {
        console.log(data.dataObj.name)
        $scope.$broadcast("myEventID", data)
    })

});