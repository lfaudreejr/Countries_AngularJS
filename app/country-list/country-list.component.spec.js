describe("countryList", function() {
  beforeEach(module("countryList"));

  describe("controller", function() {
    var $httpBackend, ctrl;

    beforeEach(
      inject(function($componentController, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend
          .expectGET("https://restcountries.eu/rest/v2/all?fields=name;flag")
          .respond([{ name: "Afghanistan" }]);
        ctrl = $componentController("countryList");
      })
    );

    it("should create a countries property with countries fetched from $http", function() {
      $httpBackend.flush();
      expect(ctrl.countries).toBeDefined();
    });
    it("should be an array of countries with a name property", function() {
      $httpBackend.flush();
      expect(ctrl.countries.length).toBeGreaterThan(0);
      expect(ctrl.countries[0]).toEqual({ name: "Afghanistan" });
    });
  });
});
