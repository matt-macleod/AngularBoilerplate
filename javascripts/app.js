
window.App = angular.module('AngularBoilerplate', [

  'ngRoute',
  'ngResource'

]).config([
  '$routeProvider',
  '$locationProvider',
  '$httpProvider',

  function($routeProvider, $locationProvider, $httpProvider){
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name-csrf-token]').attr('content');

    $routeProvider
      .when('/', {
        templateUrl: 'views/home'
      })
      .otherwise({ redirectTo: '/' });
  }

]);
