describe("countryDetail", function() {
  beforeEach(module("countryDetail"));

  describe("controller", function() {
    var ctrl;

    beforeEach(
      inject(function($componentController) {
        ctrl = $componentController("countryDetail");
      })
    );

    it("should be defined", function() {
      expect(ctrl).toBeDefined();
    });
  });
});
