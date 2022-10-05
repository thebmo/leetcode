"use strict";
exports.__esModule = true;
// https://leetcode.com/problems/richest-customer-wealth/
require("../_test_helpers/_test_helpers");
function maximumWealth(accounts) {
    var highest = 0;
    accounts.forEach(function (act) {
        var sum = act.reduce(function (prev, curr) { return curr + prev; }, 0);
        highest = sum > highest ? sum : highest;
    });
    return highest;
}
function maximumWealthTests() {
    var testMap = new Map();
    testMap.set(1, [[1]]);
    testMap.set(6, [[1, 2, 3], [3, 2, 1]]);
    testMap.set(10, [[1, 5], [7, 3], [3, 5]]);
    testMap.set(17, [[2, 8, 7], [7, 1, 3], [1, 9, 5]]);
    testMap.forEach(function (accounts, expected) {
        console.assert(maximumWealth(accounts) === expected, "expected: ".concat(expected, ": actual ").concat(maximumWealth(accounts)));
    });
}
maximumWealthTests();
