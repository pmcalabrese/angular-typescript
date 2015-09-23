/// <reference path="../../_app.d.ts"/>

module StorageService {

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
