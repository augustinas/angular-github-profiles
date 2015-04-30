describe('Users have a bespoke profile page', function() {

  beforeEach(function() {
    browser.get('http://localhost:5000');
    element(by.model('searchCtrl.searchTerm')).sendKeys('joejknowles');
    element(by.id('joejknowles')).click();
  });

  it('that show their full name', function() {
    expect(element(by.model('bespokeProfile.fullName')).getText()).toEqual('Joseph Knowles');
  });
});