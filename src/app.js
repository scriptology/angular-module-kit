require('angular')

let angular = require('angular');
//require('../dist/js/bundle_prod.js');

if(NODE_ENV == 'dev') {
    window.$ = require("jquery");
    window.jQuery = require("jquery");
}

export default angular
    .module('App', [
        //'BannerMaker'
        require('./directives/ng-banner-maker/ng-banner-maker.directive').name,
        require('./directives/ng-banner-frame/ng-banner-frame.directive').name,
        require('./directives/ng-banner-modal/ng-banner-modal.directive').name
    ])