(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];
  reposObj.followers = [];

  reposObj.requestRepos = function(callback) {
    // NOTE: refactor this request into an $.ajax call
    $.when(
     $.get('/github/users/codefellows-seattle-301d9/repos' +
            '?per_page=10' +
            '&sort=updated')
            .done(function(data){
              reposObj.allRepos = data;
            }),
     $.get('/github/users/patci/followers' +
            '?per_page=5' +
            '&sort=updated')
            .done(function(data) {
              reposObj.followers = data;
            })
    ).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
