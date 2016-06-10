// create the module and name it app
var app = angular.module('app',['ngRoute','ngMessages']);

// configure our routes
app.config(function($routeProvider) {
    $routeProvider

    // route for the home page
        .when('/home', {
        templateUrl : 'views/home.html',
        controller  : 'mainController'
    })

    // route for the about page
        .when('/about', {
        templateUrl : 'views/about.html',
        controller  : 'aboutController'
    })
    // route for the product page
        .when('/product', {
        templateUrl : 'views/product.html',
        controller  : 'productController'
    })

    // route for the contact page
        .when('/contact', {
        templateUrl : 'views/contact.html',
        controller  : 'contactController'
    });
});

// create the controller and inject Angular's $scope
app.controller('mainController', function($scope, result) {
    // create a message to display in our view
    $scope.IsVisible = [];
    $scope.message = 'Everyone come and see how good I look!'
    $scope.res = result.resultList.success(function(response){
        $scope.results=response.results
        for(var i=0; i< $scope.results.length; i++){
            $scope.IsVisible[i] = false;
        }

    });

    /*$scope.ShowHide = function (a) {
        $scope.IsVisible[a] = $scope.IsVisible[a] ? false : true;
    }*/
    $scope.Show= function (a) {
        $scope.IsVisible[a] =true;
    }  
    $scope.hide= function (a) {
        $scope.IsVisible[a] =false;
    }


});

app.controller('productController', function($scope, productList) {
    $scope.message = 'Look! I am an Product page.';
    productList.products.success(function(response){
        $scope.productData = response;
    });

});

app.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

app.controller('contactController', ["$scope", function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
    $scope.contactForm = {};





}]);