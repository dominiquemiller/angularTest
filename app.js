(function() {
var app = angular.module('store', []);

app.controller('StoreController', function(){
  this.product = gem;
});
  var gem = {
    name: 'Funky Cold Madena',
    price: 2000,
    description: 'dis dat super duper fly stuff!',
  };

})();