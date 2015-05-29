/// <reference path="../../_all.d.ts"/>
var WebsiteService;
(function (WebsiteService) {
    'use strict';
    var WebsiteItems = (function () {
        function WebsiteItems(localStorage) {
            this.localStorage = localStorage;
            this.website_items = this.localStorage.get("website_items") || [];
        }
        WebsiteItems.prototype.getItems = function () {
            return this.website_items;
        };
        WebsiteItems.prototype.add = function (element, index) {
            var element_object = {
                dom_element: element,
                value: "<empty text>"
            };
            this.website_items.splice(index + 1, 0, element_object);
        };
        WebsiteItems.prototype.remove = function (index) {
            this.website_items.splice(index, 1);
        };
        WebsiteItems.prototype.save = function (newValue) {
            this.localStorage.set("website_items", newValue);
        };
        WebsiteItems.$inject = ['localStorage'];
        return WebsiteItems;
    })();
    WebsiteService.WebsiteItems = WebsiteItems;
})(WebsiteService || (WebsiteService = {}));
angular
    .module('WebsiteService', [])
    .service('WebsiteItems', WebsiteService.WebsiteItems);
