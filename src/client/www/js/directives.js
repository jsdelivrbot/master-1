angular.module('app.directives', [])

.directive('dividerCollectionRepeat', [function($parse) {
    return {

        priority: 1001,
        compile: compile
    };

    function compile (element, attr) {
        var height = attr.itemHeight || '73';
        attr.$set('itemHeight', 'item.isDivider ? 37 : ' + height);

        element.children().attr('ng-hide', 'item.isDivider');
        element.prepend(
            '<div class="item item-divider ng-hide" ng-show="item.isDivider" ng-bind="item.divider"></div>'
        );
    }
}])

// .directive("rnTextEdit", function () {
//     return {
//         restrict: 'E',
//         replace: true,
//         scope: {
//             rnScope: '@'
//         },
//         template: '<span>{{rnScope}}</span>'
//     }
// });

.directive('blankDirective', [function(){

}]);
