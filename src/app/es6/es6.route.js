(function() {
  'use strict';

  angular
    .module('app.es6')
    .config(appConfig);

  appConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  /* @ngInject */
  function appConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider

      // HOME STATES AND NESTED VIEWS ========================================
      .state('home', {
          url: '/home',
          templateUrl: 'src/app/es6/es6.html',
          controller: 'ES6Controller',
          controllerAs: 'vm'
      })

      // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
      .state('about', {
          // we'll get to this in a bit       
      });
  }

})();