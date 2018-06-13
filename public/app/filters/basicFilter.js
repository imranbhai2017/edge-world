var breaklineFilter = angular.module('app.filters.breakline.filter', []);
breaklineFilter.filter('breaklineFilter', function($sce) {
       
       return function(original) {
              var arrayText = original.split(' ');
              var newText = '';
              _.each(arrayText, function(aString) {
                     newText = newText + aString + '<br>'
              });
              newText = newText.substring(0, newText.length - 4);
              return $sce.trustAsHtml(newText);
       };
       
});
