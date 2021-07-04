export default function aboutReactConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('react', {
        url: '/react',
        abstract: true,
        template: require('./aboutreact.html'),
        controller: 'AboutReactController',
        controllerAs: 'vm'
    });
}

aboutReactConfig.$inject = ["$stateProvider", "$urlRouterProvider"];