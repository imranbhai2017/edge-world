angular.module('app.filter.searchFilter',[])
.filter('searchFilter',function(){
    return function(original) {
        var list=original;
        var searchList;
        if(original.lenght<=searchList){
            return original;
        }
        else{
            return searchList;
        }
    
    }

})
