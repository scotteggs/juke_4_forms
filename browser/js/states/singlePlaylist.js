app.config(function($stateProvider){
	$stateProvider.state('singlePlaylist', {
		url: '/playlists/:playlistId',
		templateUrl: '/templates/singlePlaylist.html',
		controller: 'singlePlaylistCtrl',
		resolve: {
			thePlaylist: function (PlaylistsFactory, $stateParams) {
				console.log($stateParams)
				return PlaylistsFactory.getPlaylistsById($stateParams.playlistId)
			}
			// allSongs: function (songFactory) {
			// 	return SongFactory.fetchAllSongs();
			// }
		}
	})
})