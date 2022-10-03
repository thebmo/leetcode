"use strict";
// https://leetcode.com/problems/roman-to-integer/
function romanToInt(romanNumeral) {
    var romanMap = getRomans();
    var total = 0;
    for (var i = 0; i < romanNumeral.length; i++) {
        var currRoman = romanMap.get(romanNumeral[i]);
        var nextRoman = romanMap.get(romanNumeral[(i + 1)]);
        if (currRoman !== undefined) {
            if (nextRoman === undefined || currRoman >= nextRoman) {
                total += currRoman;
                continue;
            }
            else {
                total -= currRoman;
            }
        }
    }
    return total;
}
console.assert(romanToInt("VII") === 7, "expected ".concat(7, " : got ").concat(romanToInt("VII")));
console.assert(romanToInt("IX") === 9, "expected ".concat(9, " : got ").concat(romanToInt("IX")));
console.assert(romanToInt("V") === 5, "expected ".concat(5, " : got ").concat(romanToInt("V")));
console.assert(romanToInt("XXIV") === 24, "expected ".concat(24, " : got ").concat(romanToInt("XXIV")));
console.assert(romanToInt("XIV") === 14, "expected ".concat(14, " : got ").concat(romanToInt("XIV") === 14));
console.assert(romanToInt("III") === 3, "expected ".concat(3, " : got ").concat(romanToInt("III")));
console.assert(romanToInt("LVIII") === 58, "expected ".concat(58, " : got ").concat(romanToInt("LVIII")));
console.assert(romanToInt("MCMXCIV") === 1994, "expected ".concat(1994, " : got ").concat(romanToInt("MCMXCIV")));
console.assert(romanToInt("MMMCDDIC") === 3999, "expected ".concat(3999, " : got ").concat(romanToInt("MMMCDDIC")));
console.log("all good!");
function getRomans() {
    var romans = new Map([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]
    ]);
    return romans;
}
