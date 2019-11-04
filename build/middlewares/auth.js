"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = function (req, res, next) {
    if (req.session && req.session.logedIn === true) {
        next();
        return;
    }
    res.status(403).send('Not permitted');
};
