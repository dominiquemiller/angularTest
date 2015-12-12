(function() {
var app = angular.module('store', []);

app.controller('StoreController', function(){
  this.products = gems;
});
  var gems = [
  { name: 'Funky Cold Madena', price: 2000, description: 'dis dat super duper fly stuff!', soldOut: false },
  { name: 'Another gem', price: 150, description: 'really generic gem' },
  { name: 'cubic sillyness', price: 300, description: 'mid grade generic' }
];

})();
