var app = angular.module("app", []);

app.controller("AppCtrl", function ($http, $scope) {
	$scope.fetchData = function () {
		var app = this;
		$http.get("https://api.github.com/users/"+$scope.formUsernameText)
			.success(function (data) {
				app.user = data;

				$scope.name=app.user.name;
				$scope.avatar_url=app.user.avatar_url;
				$scope.html_url=app.user.html_url;
				$scope.company=app.user.company;
				$scope.blog=app.user.blog;
				$scope.location=app.user.location;
				$scope.email=app.user.email;
				if (app.user.hireable) {var hireStatus="Yes"} else {var hireStatus="No"};
				$scope.hireable=hireStatus;
				$scope.public_repos=app.user.public_repos;
				$scope.public_gists=app.user.public_gists;
				$scope.followers=app.user.followers;
				$scope.following=app.user.following;
				var date = new Date(app.user.created_at);
				$scope.created_at=date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear();
				
				//Display Block Functions
				document.getElementById("displayBlock").className='unhidden';
				document.getElementById("header").className='';
			})
			.error(function () {
				alert("Error fetching data from GitHub! :-/")
			})
	}
})
