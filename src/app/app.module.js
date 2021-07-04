import angular from 'angular';
import './es6/es6.module.js';
import './about/about.module.js';
import './about-react/aboutreact.module';
import commonstyles from '../assets/styles/commonstyle.scss';

console.log(commonstyles);

(function() {
  'use strict';

  angular.module("app", ["app.es6", "app.about", "app.about-react"]);

})();
