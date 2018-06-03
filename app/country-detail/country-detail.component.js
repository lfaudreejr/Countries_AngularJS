angular.module("countryDetail").component("countryDetail", {
  templateUrl: "country-detail/country-detail.template.html",
  controller: [
    "$routeParams",
    "$http",
    function CountryDetailController($routeParams, $http) {
      $http
        .get(
          "https://restcountries.eu/rest/v2/name/" + $routeParams.countryName
        )
        .then(({ data }) => {
          this.countryName = $routeParams.countryName;
          this.country = data[0];
        })
        .catch(error => console.log(error));
    }
  ]
});
