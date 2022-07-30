"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
axios_1["default"].get("https://jsonplaceholder.typicode.com/users/1").then(function (res) {
    console.log("WOO!");
})["catch"](function (e) {
    console.log('ERROR!', e);
});
