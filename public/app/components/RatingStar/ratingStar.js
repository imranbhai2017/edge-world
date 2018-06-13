angular.module('app.components.ratingStar.directive',[])
.directive('ratingStar', function ($compile) {
    return {
        restrict:                   'E',
        scope: {
            ratingDt:          '='
                               
        },
        templateUrl: 'app/components/RatingStar/ratingStar.html',
        bindToController: true,
        controllerAs: 'ratingStar',
        controller: function($scope) {
          var ratingStar = this;
          ratingStar.createStar = function(){
            var arr = [];
            for(var i=0;i<5;i++){
              if(i < ratingStar.ratingDt){
                if((i-ratingStar.ratingDt) == -0.5){
                    arr.push(0.5);
                  }else{
                  arr.push(1);
                  }
              }else{
                arr.push(0);
              }
            }
            return arr;
          }

          ratingStar.getClass = function(value){
            if(value == 0.5){
                return "half-star";
            }else if(value == 0){
              return "empty-star";
            }
          }
       }
    }
});
