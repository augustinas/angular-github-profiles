describe('Factory: User info', function() {
  var userInfo;
  var httpBackend;
  beforeEach(module('GitUserSearch'));
  beforeEach(inject(function(UserInfo) {
    userInfo = UserInfo;
  }));
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when('https://api.github.com/users/joejknowles')
      .respond({
        name: 'Joseph Knowles'
      });
  }));

  it('returns full name of the user', function() {
    userInfo.getUserInfo('joejknowles')
      .then(function(response) {
        expect(response.data).toEqual({
          name: 'Joseph Knowles'
        });
      });
  });
});