export default class AboutController {

    #_scope;
    constructor($scope) {
        this.name = 'Prateek Shrivastava';
        this.age = 27;
        this.flag = false;
        console.log('==inside about controller==');
        this.#_scope = $scope;
        
    }

    changeName(newName) {

        this.name = newName ?
            this.name === 'Prateek Shrivastava' ?
                newName : 'Prateek Shrivastava' :
            'No name provided';

    }

    toggleFlagDynamic() {

        import( /* webpackPrefetch: true */ /* webpackChunkName: "aboutservice" */ './about.service').then(function (aboutService) {

            console.log(aboutService.default);
            var aboutObj = new aboutService.default;

            this.flag = aboutObj.toggleButton(this.flag);
            console.log('== called toggle flag==', this.flag);
            this.#_scope.$apply();

        }.bind(this));

    }
}

AboutController.$inject = ['$scope'];