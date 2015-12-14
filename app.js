(function() {
var app = angular.module('store', []);

app.controller('StoreController', function(){
  this.products = gems;
});
  var gems = [
  { name: 'Funky Cold Madena', price: 2000, description: 'dis dat super duper fly stuff!', soldOut: false, reviews: [ {
                                                                                                                    stars: 5,
                                                                                                                    body: "none",
                                                                                                                    author: "me",
                                                                                                                    createdOn: 1397490980837
                                                                                                                  } ] },
  { name: 'Another gem', price: 150, description: 'really generic gem', reviews: [] },
  { name: 'cubic sillyness', price: 300, description: 'mid grade generic', reviews: [] }
];

app.controller('ReviewController', function(){
  this.review = {};
    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };

});

app.directive('productInfo', function(){
  return {
    restrict: 'A',
    templateUrl: 'product-info.html'
  };
});

})();
