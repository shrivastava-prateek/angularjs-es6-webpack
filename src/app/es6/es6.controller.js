//import ES6Service from './es6utility.service';
import es6styles from './es6sass.scss';

console.log(es6styles);

export default class ES6Controller {

    #_scope;
    constructor($scope) {
        this.name = 'Prateek Shrivastava';
        this.age = 27;
        this.flag = false;
        console.log('==inside es6 controller==');
        this.#_scope = $scope;
        this.es6styles = es6styles;
    }

    changeName(newName) {

        this.name = newName ?
            this.name === 'Prateek Shrivastava' ?
                newName : 'Prateek Shrivastava' :
            'No name provided';

    }

    changeAge(newAge) {

        this.age = newAge ? newAge : 1;

    }

    toggleFlag() {

        const es6Service = new ES6Service();
        this.flag = es6Service.toggleButton(this.flag);
        console.log('=== called toggleFlag ===', this.flag);

    }

    toggleFlagDynamic() {

        import( /* webpackPrefetch: true */ /* webpackChunkName: "es6service" */ './es6utility.service').then(function (es6service) {

            console.log(es6service.default);
            var es6Obj = new es6service.default;

            this.flag = es6Obj.toggleButton(this.flag);
            console.log('== called toggle flag==', this.flag);
            this.#_scope.$apply();

        }.bind(this));

    }
}

ES6Controller.$inject = ['$scope'];