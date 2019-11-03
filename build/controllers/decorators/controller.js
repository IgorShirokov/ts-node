"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.Controller = function (routePrefix) { return function (target) {
    for (var key in target.prototype) {
        var routeHandler = target.prototype[key];
        var path = Reflect.getMetadata('path', target.prototype[key], key);
    }
}; };
