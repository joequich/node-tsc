"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var MySQL = /** @class */ (function () {
    function MySQL() {
        this.connected = false;
        console.log('Initialized Class');
        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: 'weekend7',
            database: 'node_db'
        });
        this.connectDB();
    }
    Object.defineProperty(MySQL, "instance", {
        get: function () {
            return this._instance || (this._instance = new this());
        },
        enumerable: false,
        configurable: true
    });
    MySQL.executeQuery = function (query, callback) {
        this.instance.cnn.query(query, function (err, results, fields) {
            if (err) {
                console.log('Error in query');
                console.log(err);
                return callback(err);
            }
            if (results.length === 0) {
                callback('The requested record doesn\'t exist');
            }
            else {
                callback(null, results);
            }
        });
    };
    MySQL.prototype.connectDB = function () {
        this.cnn.connect(function (err) {
            if (err) {
                console.log(err.message);
                return;
            }
        });
        this.connected = true;
        console.log('The database is online');
    };
    return MySQL;
}());
exports.default = MySQL;
