"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var metadatakeys_1 = require("./metadatakeys");
var AppRouter_1 = require("../../AppRouter");
var middlewares_1 = require("../../middlewares");
exports.Controller = function (routePrefix) { return function (target) {
    for (var key in target.prototype) {
        var router = AppRouter_1.AppRouter.getInstance();
        var routeHandler = target.prototype[key];
        var path = Reflect.getMetadata(metadatakeys_1.MetadataKeys.path, target.prototype, key);
        var method = Reflect.getMetadata(metadatakeys_1.MetadataKeys.method, target.prototype, key);
        var middlewares = Reflect.getMetadata(metadatakeys_1.MetadataKeys.middleware, target.prototype, key) || [];
        var requiredBodyProps = Reflect.getMetadata(metadatakeys_1.MetadataKeys.validator, target.prototype, key) || [];
        var validator = middlewares_1.bodyValidators(requiredBodyProps);
        if (path) {
            router[method].apply(router, __spreadArrays(["" + routePrefix + path], middlewares, [validator,
                routeHandler]));
        }
    }
}; };
