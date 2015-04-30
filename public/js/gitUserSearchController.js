githubUserSearch.controller('GitUserSearchController', ['Search', function(Search) {
  var self = this;

  self.doSearch = function() {
    if (self.searchTerm) {
      Search.query(self.searchTerm)
        .then(function(reponse) {
          self.searchResult = reponse.data;
        });
    } else {
      self.searchResult = {};
    }
  };
}]);