angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = exampleVideoData,
      this.currentVideo = exampleVideoData[0],
      this.query = '';
      
      this.onSearch = () => {
        
      };
      
      this.selectVideo = (video) => {
        this.currentVideo = video;
      };
    },
    
    templateUrl: 'src/templates/app.html'
  });
