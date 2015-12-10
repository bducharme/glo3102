angular.module('cornpub')
  .factory('UsersFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/users/:id', {}, {});
  })

  .factory('FriendFactory', function ($resource, baseURL) {
    'use strict';
    return $resource(baseURL + '/follow/:id', {}, {});
  });
