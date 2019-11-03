"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var methods_1 = require("./methods");
var metadatakeys_1 = require("./metadatakeys");
var routeBinder = function (method) { return function (path) { return function (target, key, desc) {
    Reflect.defineMetadata(metadatakeys_1.MetadataKeys.path, path, target, key);
    Reflect.defineMetadata(metadatakeys_1.MetadataKeys.method, method, target, key);
}; }; };
exports.Get = routeBinder(methods_1.Methods.get);
exports.Delete = routeBinder(methods_1.Methods.del);
exports.Post = routeBinder(methods_1.Methods.post);
exports.Put = routeBinder(methods_1.Methods.put);
exports.Patch = routeBinder(methods_1.Methods.patch);
