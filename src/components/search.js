angular.module('video-player')
  .component('search', {
    bindings: {
      query: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
