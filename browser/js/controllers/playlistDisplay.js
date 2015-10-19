//DISPLAY PLAYLISTS ON THE SIDEBAR
app.controller('PlaylistsDisplayCtrl', function($scope, PlaylistsFactory){
	PlaylistsFactory.getPlaylists()
	.then(function(data){
		$scope.playlistsArray = data;
	})
})