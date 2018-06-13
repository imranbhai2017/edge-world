angular.module('app.pages.about.controller',['app.pages.services.commonService'
])
.config(function ($stateProvider) {
    $stateProvider
.state('pages.about',{
    url: "/about",
    views:{
        'content': {
    templateUrl: "app/pages/about/about.html",
    controller: "aboutController as about"    
        }}
    })
  })
.controller('aboutController',function($scope,CommonData){
    var about=this;
    
    

    
    
    
});