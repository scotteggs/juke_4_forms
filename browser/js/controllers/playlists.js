//ADDING NEW PLAYISTS
app.controller('PlaylistsCtrl', function($scope, $stateParams, PlaylistsFactory){
	$scope.playlist = {}; //makes this an []
	// $scope.PlaylistForm.$setPristine();


	$scope.submit = function(){
		if ($scope.newPlaylist.title){
			$scope.playlist.title = $scope.newPlaylist.title;       //.push(this.newPlaylistTitle);
		}
		PlaylistsFactory.create($scope.newPlaylist.title)
		.then(function(data){
			$scope.newPlaylist = {};
			$scope.PlaylistForm.$setPristine();
			



			console.log("received", data)
			//"playlist created successfully" <-- to user
		});
	}
});