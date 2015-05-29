/// <reference path="../../_all.d.ts"/>

module WebsiteService {
    'use strict';

    export interface IWebsiteItems {
        getItems(): Array<any>;
        add(element: string, index: number): void;
        remove(index: number): void;
        save(newValue: any): void;
    }

    export class WebsiteItems {

        static $inject = ['localStorage'];
        constructor(public localStorage: StorageService.IlocalStorage) {

        }

        // website model
        website_items = this.localStorage.get("website_items") || [];

        getItems(): Array<any> {
            return this.website_items;
        }

        // add element
        add(element: string, index: number): void {
            var element_object = {
                dom_element:element,
                value:"<empty text>"
            };
            this.website_items.splice(index+1, 0, element_object);
        }

        // delete element
        remove(index: number): void {
            this.website_items.splice(index, 1);
        }

        save(newValue: any): void {
            this.localStorage.set("website_items",newValue);
        }

    }
}

angular
    .module('WebsiteService',[])
    .service('WebsiteItems', WebsiteService.WebsiteItems);
