/// <reference path="../../_all.d.ts"/>
// https://github.com/DefinitelyTyped/tsd
// http://kwilson.me.uk/blog/writing-cleaner-angularjs-with-typescript-and-controlleras/
// https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts
var HomeComponent;
(function (HomeComponent) {
    var HomeController = (function () {
        function HomeController($scope, WebsiteItems) {
            this.$scope = $scope;
            this.WebsiteItems = WebsiteItems;
            this.website_items = WebsiteItems.getItems();
            $scope.$watch("vm.website_items", function (newValue, oldValue) {
                if (JSON.stringify(newValue) === JSON.stringify(oldValue))
                    return;
                console.log("...saving to the local storage...");
                WebsiteItems.save(newValue);
            }, true);
        }
        HomeController.prototype.addElement = function (element, index) {
            this.WebsiteItems.add(element, index);
        };
        HomeController.prototype.deleteElement = function (index) {
            this.WebsiteItems.remove(index);
        };
        HomeController.$inject = ['$scope', 'WebsiteItems'];
        return HomeController;
    })();
    HomeComponent.HomeController = HomeController;
})(HomeComponent || (HomeComponent = {}));
angular
    .module('HomeComponent', [])
    .controller('HomeController', HomeComponent.HomeController);
