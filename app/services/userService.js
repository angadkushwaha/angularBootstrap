app.service("result", function($http){
    this.resultList =$http({
        method: 'GET',
        url: 'http://api.randomuser.me/?results=20'
    });
});
app.service("productList", function($http){
    this.products = $http({
        method: 'GET',
        url: './json/product.json'
    });
    
});
