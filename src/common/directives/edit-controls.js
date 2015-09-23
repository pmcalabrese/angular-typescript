var Common;
(function (Common) {
    var Directives;
    (function (Directives) {
        function editelem($compile) {
            var template = {
                h1: "<h1 class='editable' ng-if='!editOn'>{{elvalue}}</h1>" +
                    "<h1 ng-if='editOn'><input type='text' ng-model='$parent.elvalue'></h1>",
                p: "<p class='editable' ng-if='!editOn'>{{elvalue}}</p>" +
                    "<p ng-if='editOn'><input type='text' ng-model='$parent.elvalue'></p>"
            };
            var linker = function (scope, element, attrs) {
                element.html(template[attrs.et]);
                $compile(element.contents())(scope);
            };
            return {
                scope: {
                    elvalue: "=",
                    et: "@",
                    editOn: "="
                },
                restrict: 'E',
                transclude: true,
                link: linker
            };
        }
        Directives.editelem = editelem;
    })(Directives = Common.Directives || (Common.Directives = {}));
})(Common || (Common = {}));
angular.module('Common.Directives.editelem', [])
    .directive('editelem', Common.Directives.editelem);
