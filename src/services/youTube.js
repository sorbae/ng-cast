angular.module('video-player')
  .service('youTube', function($http) {
    search = function(query) {
      let params = {
        q: query,
        key: window.YOUTUBE_API_KEY,
        maxResults: '5'
      };
      
      return $http.get('https://www.googleapis.com/youtube/v3/search', params)
        .then(function successCallback(data) {
          console.log('success', data);
        }, function errorCallback(data) {
          console.log('fail', data);
        });
    };
  });
