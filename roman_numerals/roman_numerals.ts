// https://leetcode.com/problems/roman-to-integer/
function romanToInt(romanNumeral: string) {
    let romanMap = getRomans();
    let total = 0;

    for(var i = 0; i < romanNumeral.length; i++) {
        let currRoman = romanMap.get(romanNumeral[i]);
        let nextRoman = romanMap.get(romanNumeral[(i+1)]);

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

console.assert(romanToInt("VII") === 7, `expected ${7} : got ${romanToInt("VII")}`);
console.assert(romanToInt("IX") === 9, `expected ${9} : got ${romanToInt("IX")}`);
console.assert(romanToInt("V") === 5, `expected ${5} : got ${romanToInt("V")}`);
console.assert(romanToInt("XXIV") === 24, `expected ${24} : got ${romanToInt("XXIV")}`)
console.assert(romanToInt("XIV") === 14, `expected ${14} : got ${romanToInt("XIV") === 14}`)

console.assert(romanToInt("III") === 3, `expected ${3} : got ${romanToInt("III")}`);
console.assert(romanToInt("LVIII") === 58, `expected ${58} : got ${romanToInt("LVIII")}`);
console.assert(romanToInt("MCMXCIV") === 1994, `expected ${1994} : got ${romanToInt("MCMXCIV")}`);

console.assert(romanToInt("MMMCDDIC") === 3999, `expected ${3999} : got ${romanToInt("MMMCDDIC")}`);

console.log("all good!");


function getRomans() {
    let romans = new Map<string, number>([
        ["I", 1],
        ["V", 5],
        ["X", 10],
        ["L", 50],
        ["C", 100],
        ["D", 500],
        ["M", 1000]]);

        return romans;
}