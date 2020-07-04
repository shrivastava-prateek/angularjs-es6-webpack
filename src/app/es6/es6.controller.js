export default class ES6Controller {

    constructor() {

        this.name = 'Prateek Shrivastava';
        this.age = 27;
        console.log('inside es6 controller');
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
}

/* (function() {
'use strict';
angular.module('app.es6').controller('ES6Controller',ES6Controller);
})
();
*/