'use strict';

export default angular
    .module('BannerMaker', [
        require('../directives/ng-banner-maker/ng-banner-maker.directive').name,
        require('../directives/ng-banner-frame/ng-banner-frame.directive').name
    ])
