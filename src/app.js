

//require('lodash');
//console.log("%cCondé Nast Digital", "color:white; background:black; font-size: 14px, display: inline-block, padding: 0 5px");

export default require('angular')
    .module('App', [
        require('./directives/ng-banner-maker/ng-banner-maker.directive').name,
        require('./directives/ng-banner-frame/ng-banner-frame.directive').name
    ])