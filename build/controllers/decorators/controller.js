"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var metadatakeys_1 = require("./metadatakeys");
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
exports.Controller = function (routePrefix) { return function (target) {
    for (var key in target.prototype) {
        var router = AppRouter_1.AppRouter.getInstance();
        var routeHandler = target.prototype[key];
        var path = Reflect.getMetadata(metadatakeys_1.MetadataKeys.path, target.prototype, key);
        var method = Reflect.getMetadata(metadatakeys_1.MetadataKeys.method, target.prototype, key);
        if (path) {
            router[method]("" + routePrefix + path, routeHandler);
        }
    }
}; };
