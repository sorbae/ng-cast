angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function(query, callback) {
      let params = {
        type: 'video',
        videoEmbeddable: 'true',
        q: query,
        key: window.YOUTUBE_API_KEY,
        maxResults: '5',
        part: 'snippet'
      };
      
      return $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params
      }).then(function(data) {
        console.log('success', data);
        return callback(data);
      }, function(data) {
        console.log('fail', data);
      });
    };
  });
