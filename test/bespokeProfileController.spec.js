describe('Bespoke Profile Controller', function() {
  var ctrl;
  var httpBackend;

  beforeEach(module('GitUserSearch'));

  beforeEach(inject(function($controller) {
    ctrl = $controller('BespokeProfileController');
  }));

  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .expectGET("https://api.github.com/users/joejknowles")
      .respond(
        { name: 'Joseph Knowles' }
      );
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it('shows full name of the user', function() {
    ctrl.username = 'joejknowles';
    ctrl.getUserInfo();
    httpBackend.flush();
    expect(ctrl.fullName).toEqual('Joseph Knowles');
  });
});