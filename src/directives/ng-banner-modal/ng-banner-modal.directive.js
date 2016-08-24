/**
 * Created by asolovyev on 24/08/16.
 */

require('!style!css!sass!./style/ng-banner-modal.sass');

function ngBannerModal($compile) {
    
    const openModal = function (tmp) {
        console.log(tmp)
    };
    
    const templates = {
        default: require('pug!./views/modal-default.pug')()
    };

    return {
        restrict: 'EA',
        scope: true,
        link: (scope, element, attrs) => {
            
            element.on('click', function() {
                openModal(attrs.template);
                $('.banner-maker').append($compile(templates[attrs.template])(scope));
            });

            scope.closeModal = function (e) {
                e.stopPropagation();
                $('.js-banner-modal').remove();
            }


        }
    }
}


export default angular
    .module('ng-banner-modal.directive', [])
    .directive('ngBannerModal', ngBannerModal);