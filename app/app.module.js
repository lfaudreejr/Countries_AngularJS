"use strict";

// Declare app level module which depends on views, and components
angular
  .module("myApp", ["ngRoute", "core", "countryList", "countryDetail"])
  .config([
    "$locationProvider",
    "$routeProvider",
    function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix("!");

      $routeProvider
        .when("/countries", {
          template: "<country-list></country-list>"
        })
        .when("/countries/:countryName", {
          template: "<country-detail></country-detail>"
        })
        .otherwise("/countries");
    }
  ]);
