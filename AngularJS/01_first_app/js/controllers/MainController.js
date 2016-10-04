app.controller('MainController',['$scope',function($scope){
  $scope.title = "Best Sellers in Books";
  $scope.promo = "Discover Our's Most Popular Books";
  $scope.products =
		[
    	{
         name: 'The Book of Trees', 
         price: 19, 
         pubdate: new Date('2014', '03', '08'), 
         cover: 'img/the-book-of-trees.jpg',
         likes: 0,
         dislikes: 0
      },
    	{ 
        name: 'Program or be Programmed', 
        price: 8, 
        pubdate: new Date('2013', '08', '01'), 
        cover: 'img/program-or-be-programmed.jpg',
        likes: 0,
        dislikes: 0
 			},
      {
        name: 'Spilled Milk', 
        price: 19, 
        pubdate: new Date('2013', '06', '07'), 
        cover: 'img/book3.jpg',
        likes: 0,
        dislikes: 0
      },
    	{ 
        name: 'Hostile Witness', 
        price: 8, 
        pubdate: new Date('2012', '03', '22'), 
        cover: 'img/book4.jpg',
        likes: 0,
        dislikes: 0
    }
	];
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
}]);