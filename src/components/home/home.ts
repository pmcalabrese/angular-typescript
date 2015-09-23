/// <reference path="../../_app.d.ts"/>
// https://github.com/DefinitelyTyped/tsd
// http://kwilson.me.uk/blog/writing-cleaner-angularjs-with-typescript-and-controlleras/
// https://github.com/tastejs/todomvc/blob/gh-pages/examples/typescript-angular/js/controllers/TodoCtrl.ts

module HomeComponent {
    // since in the app.ts file

    export class HomeController {
        website_items: any[];

        static $inject = ['$scope','WebsiteItems'];
        constructor(public $scope: ng.IScope,public WebsiteItems: WebsiteService.WebsiteItems) {

            this.website_items = WebsiteItems.getItems();

            // watch website model and save it when it changes
            $scope.$watch("vm.website_items", function(newValue, oldValue) {
                if (JSON.stringify(newValue) === JSON.stringify(oldValue)) return;
                console.log("...saving to the local storage...");
                WebsiteItems.save(newValue);
            },true);
        }

        // add element
        addElement = (element: string, index: number): void => {
            this.WebsiteItems.add(element,index);
        }

        // delete element
        deleteElement = (index: number): void => {
            this.WebsiteItems.remove(index);
        }
    }
}

angular
    .module('HomeComponent',[])
    .controller('HomeController', HomeComponent.HomeController);
