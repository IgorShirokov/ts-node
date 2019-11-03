"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
exports.Controller = function (routePrefix) { return function (target) {
    for (var key in target.prototype) {
        var router = AppRouter_1.AppRouter.getInstance();
        var routeHandler = target.prototype[key];
        var path = Reflect.getMetadata('path', target.prototype, key);
        if (path) {
            router.get("" + routePrefix + path, routeHandler);
        }
    }
}; };
