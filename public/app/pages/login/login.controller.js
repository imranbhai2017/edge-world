

angular.module('app.pages.login.controller',['ui.router'])

/* .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/pages/login/login.controller.html',
				controller: 'loginController as login'

            });
        $urlRouterProvider.otherwise('/login');
 }) */

   
 
.controller('loginController', function ($state, CommonData) {
	  var login = this;
	  login.myfunction = function(){
                var filter = {
                    "userName":login.userName,
                    "password": login.password,
                }; 
                login.filter = filter;
                login.resource = CommonData.postLoginData(filter);  
                login.resource.$promise.then(function(response){
        var data=response.message;
        console.log('loginData',data);
        if(data =="success"){
        $state.go('pages.home', {});
        }else{
        $state.go('login', {});
        }
        
        }
        ) } 
  
});
 
