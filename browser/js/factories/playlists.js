app.factory('PlaylistsFactory', function($http, $rootScope){
	var cachedPlaylists = [];
	var PlaylistsFactory = {};

	PlaylistsFactory.create = function(data){ //obj or title, songArray
		return $http.post('/api/playlists', {name: data})
		.then(function(response){
			var playlist = response.data;
			cachedPlaylists.push(playlist);
			return playlist;
		}) 		
	}

	PlaylistsFactory.getPlaylists = function(){
		return $http.get('api/playlists')
		.then(function(response){
			angular.copy(response.data, cachedPlaylists);
            return cachedPlaylists;
		});
	}

	PlaylistsFactory.getPlaylistsById = function(id) {
		return $http.get('/api/playlists/' + id)
		.then(function (response) {
			return response.data;
		})
		.then(function (playlist) {
			playlist.songs = playlist.songs.map(function (s) {
				return SongFactory.convert(s, playlist.artists);
			});
			return playlist;
		}); 
	}
	return PlaylistsFactory;
});
