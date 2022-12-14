"use strict";
exports.__esModule = true;
exports.MyNode = exports.arraysEqual = void 0;
function arraysEqual(actual, expected) {
    if (actual.length !== expected.length)
        return false;
    for (var i = 0; i < actual.length; i++) {
        if (actual[i] !== expected[i])
            return false;
    }
    return true;
}
exports.arraysEqual = arraysEqual;
var MyNode = /** @class */ (function () {
    function MyNode(val, next) {
        this.val = val;
        this.next = (next === undefined ? null : next);
    }
    return MyNode;
}());
exports.MyNode = MyNode;
