import uirouter from 'angular-ui-router';
import aboutConfig from './about.route.js';
import AboutController from './about.controller.js';

(function() {
    'use strict';
    angular.module('app.about',['ui.router'])
    .config(aboutConfig)
    .controller('AboutController',AboutController);
  })();