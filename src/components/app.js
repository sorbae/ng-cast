angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = exampleVideoData,
      this.currentVideo = exampleVideoData[0],
      
      this.searchResults = (query) => {
        youTube.search(query, results => {
          this.videos = results.data.items;
          this.currentVideo = results.data.items[0];
        });
      };
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
      
      this.init = () => {
        this.searchResults('talking dogs');
      };
      this.init();
    },
    
    templateUrl: 'src/templates/app.html'
  });
