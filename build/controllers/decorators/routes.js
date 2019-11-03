"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
exports.GET = function (path) { return function (target, key, desc) {
    Reflect.defineMetadata('path', path, target, key);
}; };
