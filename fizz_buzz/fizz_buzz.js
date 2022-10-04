"use strict";
exports.__esModule = true;
// https://leetcode.com/problems/fizz-buzz/
var _test_helpers_1 = require("../_test_helpers/_test_helpers");
// @returns { Array<string> }
function fizzBuzz(n) {
    var fizzBuzzArr = new Array();
    for (var i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            fizzBuzzArr.push("FizzBuzz");
        }
        else if (i % 3 === 0) {
            fizzBuzzArr.push("Fizz");
        }
        else if (i % 5 === 0) {
            fizzBuzzArr.push("Buzz");
        }
        else {
            fizzBuzzArr.push(i.toString());
        }
    }
    return fizzBuzzArr;
}
function fizzBuzzTest() {
    var testMap = new Map();
    testMap.set(3, ["1", "2", "Fizz"]);
    testMap.set(5, ["1", "2", "Fizz", "4", "Buzz"]);
    testMap.set(15, ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]);
    testMap.forEach(function (expected, val) {
        console.assert((0, _test_helpers_1.arraysEqual)(fizzBuzz(val), expected), "expected ".concat(expected, " : got ").concat(fizzBuzz(val)));
    });
}
fizzBuzzTest();
