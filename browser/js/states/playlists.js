app.config(function($stateProvider){
	$stateProvider.state('newPlaylist', {
		url: '/playlists/new',
		templateUrl: '/templates/playlists.html',
		controller: 'PlaylistsCtrl'
		// resolve:
	})
})