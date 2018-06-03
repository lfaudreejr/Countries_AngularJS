angular.module("countryList").component("countryList", {
  templateUrl: "country-list/country-list.template.html",
  controller: [
    "$http",
    function CountryListController($http) {
      $http
        .get("https://restcountries.eu/rest/v2/all?fields=name;flag")
        .then(({ data }) => {
          this.countries = data;
        });
    }
  ]
});
