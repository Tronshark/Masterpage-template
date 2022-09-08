angular.module('app', ['ui.router']).config([
  '$urlRouterProvider',
  '$stateProvider',
  function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/')
    $stateProvider
      .state('About', {
        url: '/',
        templateUrl: 'about.html'
      })
      .state('Dashboard', {
        url: '/Dashboard.html',
        templateUrl: '/Dashboard.html'
      })
      .state('Skills', {
        url: '/Skills.html',
        templateUrl: '/Skills.html'
      })
      .state('Experience', {
        url: '/Experience.html',
        templateUrl: '/Experience.html'
      })
      .state('Interests', {
        url: '/interests.html',
        templateUrl: '/interests.html'
      })
      .state('Contact', {
        url: '/Contact.html',
        templateUrl: '/Contact.html'
      })
  }
])
