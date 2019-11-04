"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var requireAuth = function (req, res, next) {
    if (req.session && req.session.logedIn === true) {
        next();
        return;
    }
    res.status(403).send('Not permitted');
};
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    if (req.session && req.session.logedIn) {
        res.send("<div>\n        <div>You are logged in</div>\n        <a href=\"/auth/logout\">Logout</a>\n      </div>\n      ");
    }
    else {
        res.send("<div>\n        <div>You are not logged in</div>\n        <a href=\"/auth/login\">Login</a>\n      </div>\n      ");
    }
});
router.get('/logout', function (req, res) {
    req.session = undefined;
    res.redirect('/');
});
router.get('/protected', requireAuth, function (req, res) {
    res.send('Welcome to protected route!');
});
