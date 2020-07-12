export default function aboutConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('about', {
        url: '/about',
        template: require('./about.html'),
        controller: 'AboutController',
        controllerAs: 'vm'
    });
}

aboutConfig.$inject = ['$stateProvider', '$urlRouterProvider'];