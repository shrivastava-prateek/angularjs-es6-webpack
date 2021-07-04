import uirouter from 'angular-ui-router';
import aboutReactConfig from './aboutreact.route';
import AboutReactController from './aboutreact.controller.js';

(function() {
    'use strict';
    angular
      .module("app.about-react", ["ui.router"])
      .config(aboutReactConfig)
      .controller("AboutReactController", AboutReactController);
  })();