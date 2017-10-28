angular.module('video-player')
  .component('search', {
    bindings: {
      query: '<',
      result: '<'
    },
    templateUrl: 'src/templates/search.html'
  });
