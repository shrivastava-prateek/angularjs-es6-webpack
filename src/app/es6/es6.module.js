import uirouter from 'angular-ui-router';
import eS6Config from './es6.route.js';
import ES6Controller from './es6.controller.js';
import es6styles from './es6sass.scss';

console.log(es6styles);

(function() {
    'use strict';
    angular.module('app.es6',['ui.router'])
    .config(eS6Config)
    .controller('ES6Controller',ES6Controller);
  })();