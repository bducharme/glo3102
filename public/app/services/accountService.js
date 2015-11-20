angular.module('cornpub')
  .factory('Account', function($resource, baseURL) {
    return $resource(baseURL + '/tokenInfo', {} , {});
  })

  .factory('LogoutService', function($resource, baseURL) {
    return $resource(baseURL + '/logout', {} , {});
  });
