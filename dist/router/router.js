"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
router.get('/heroes', function (req, res) {
    res.json({
        ok: true,
        message: 'All fine'
    });
});
router.get('/heroes/:id', function (req, res) {
    var id = req.params.id;
    res.json({
        ok: true,
        message: 'All fine',
        id: id
    });
});
exports.default = router;
