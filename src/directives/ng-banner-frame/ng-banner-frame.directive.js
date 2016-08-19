/**
 * Created by asolovyev on 19/08/16.
 */

let angular = angular || {};
if(NODE_ENV == 'dev') {
    angular = require('angular');
}

function ngBannerFrame() {
    return {
        restrict: 'EA',
        scope: true,
        replace: true,
        //template: require("pug!./views/banner-maker.pug"),
        link: (scope) => {
            scope.test = "bottom";

            scope.dataBanner =   {
                "id": 0,
                "active": true,
                "dataCreated": "",
                "project": "",
                "creator": "",
                "layers": [
                    {
                        "frame": "http://fakeimg.pl/100x200/282828/eae0d0/",
                        "animationType": "",
                        "animationTime": "",
                        "frameShow": ""
                    },
                    {
                        "frame": "http://fakeimg.pl/100x200/282828/eae0d0/",
                        "animationType": "",
                        "animationTime": "",
                        "frameShow": ""
                    }
                ]
            };

            scope.addLayer = ()=> {
                let layer = {
                    "frame": "http://fakeimg.pl/100x200/282828/eae0d0/",
                };
                scope.dataBanner.layers.push(layer);
            };


        }
    }
}


export default angular
    .module('ng-banner-frame.directive', [])
    .directive('ngBannerFrame', ngBannerFrame);
