var app = angular.module("app",["ngRoute","ngSanitize"]);
app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'tpl/indexList.html',
		controller:"indexList"

	})

	.when('/list:id',{
		templateUrl:"tpl/list.html",
		controller:"list"
	})

	.when('/show:id',{
		templateUrl:"tpl/show.html",
		controller:"show"
	})



});



app.controller("indexList",function($scope,$http){
	$http({
		url:'api.php?url=http://news-at.zhihu.com/api/4/news/latest',
		method:"GET",
	})

	.then(function(data){
		$scope.data = data;
		 // console.log(data)
	})
});


app.controller('head',function($scope,$http){
	$http({
		url:'api.php?url=http://news-at.zhihu.com/api/4/themes',
		method:"GET",
	})

	.then(function(data){
		$scope.data = data;
	})
})




app.controller('list',function($scope,$http,$routeParams){
	var id = $routeParams.id;
	$http({
		url:"api.php?url=http://news-at.zhihu.com/api/4/theme/"+id,
		method:"GET",
	})

	.then(function(data){
		$scope.data = data;

	})
	
})


app.controller('show',function($scope,$http,$routeParams){
	var id = $routeParams.id;
	$http({
		url:'api.php?url=http://news-at.zhihu.com/api/4/news/'+id,
		method:"GET",
	})

	.then(function(data){
		$scope.content = data.data;
		 console.log(data)
	})
})



