var StorageService;
(function (StorageService) {
    var localStorage = (function () {
        function localStorage() {
        }
        localStorage.prototype.get = function (name) {
            return JSON.parse(window.localStorage.getItem(name));
        };
        localStorage.prototype.set = function (name, value) {
            window.localStorage.setItem(name, JSON.stringify(value));
        };
        return localStorage;
    })();
    StorageService.localStorage = localStorage;
})(StorageService || (StorageService = {}));
angular
    .module('StorageService', [])
    .service('localStorage', StorageService.localStorage);
