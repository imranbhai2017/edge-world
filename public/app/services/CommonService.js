angular.module('app.pages.services.commonService',['ngResource'])
.factory('datafactory',function($resource){
    
    var _actions = {
		 
    getdata:{
        method: 'GET',
			url: '/getService',
		    headers: {
	            'Content-Type': 'application/json'
            },
            isArray : false,
	        data: {},
        },
        postLoginData:{
            method: 'POST',
            url:'/postLogindata',
            headers: {
            'Content-Type': 'application/json'
            },
            isArray : false,
            data: {},
            }
    
    };
        var _resource = $resource('/getService',{}, _actions);
	
        return function() {
            return _resource;
        }
})
.service('CommonData',function(datafactory){
    var CommonData=this;
     
    var datas=datafactory().getdata();
    CommonData.setData=function(datas){
        this.datas=datas;
    }
    CommonData.getdata=function(){
        return datas
    }
    CommonData.postLoginData = function(filter){
        return new datafactory().postLoginData(filter);
        }
    
    
}
);