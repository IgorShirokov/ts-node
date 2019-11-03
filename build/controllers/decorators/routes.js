"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var routeBinder = function (method) { return function (path) { return function (target, key, desc) {
    Reflect.defineMetadata('path', path, target, key);
    Reflect.defineMetadata('method', method, target, key);
}; }; };
exports.Get = routeBinder('get');
exports.Delete = routeBinder('delete');
exports.Post = routeBinder('post');
exports.Put = routeBinder('put');
exports.Patch = routeBinder('patch');
