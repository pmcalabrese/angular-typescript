/// <reference path="../../_all.d.ts"/>

module StorageService {
    'use strict';

    export interface IlocalStorage {
        get(name: string): Array<any>;
        set(name:string, value:any): void;
    }

    export class localStorage {

        constructor() {

        }
        /**
        *  get some data from localstorage
        **/
        get(name: string): Array<any> {
            return JSON.parse(window.localStorage.getItem(name));
        }

        /**
        *  set some data into the localstorage
        **/
        set(name:string, value:any): void {
            window.localStorage.setItem(name,JSON.stringify(value));
        }

    }
}

angular
    .module('StorageService',[])
    .service('localStorage', StorageService.localStorage);
