githubUserSearch.factory('UserInfo', ['$http', function($http) {
  var usersUrl = 'https://api.github.com/users/';
  return {
    getUserInfo: function(username) {
      return $http({
        url: usersUrl + username,
        method: 'GET'
      });
    }
  };
}]);