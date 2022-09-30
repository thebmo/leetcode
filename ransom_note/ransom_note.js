"use strict";
function canConstruct(ransomNote, magazine) {
    var noteMap = new Map();
    var magzMap = new Map();
    var canConstruct = true;
    [ransomNote, magazine].forEach(function (word, idx) {
        var map = idx == 0 ? noteMap : magzMap;
        for (var i = 0; i < word.length; i++) {
            var char = word[i].toLowerCase();
            var entry = map.get(char);
            if (entry === undefined) {
                map.set(char, 1);
            }
            else {
                map.set(char, entry + 1);
            }
        }
    });
    noteMap.forEach(function (val, key) {
        var magVar = magzMap.get(key);
        if (magVar === undefined || magVar < val) {
            canConstruct = false;
        }
    });
    return canConstruct;
}
function testCase() {
    var ransomNote = 'I have SteVe!';
    var magazine = 'I have SteVe!';
    console.assert(canConstruct(ransomNote, magazine), "expecting true for ".concat(ransomNote, " : ").concat(magazine));
    console.assert(canConstruct('a', 'b'), 'a != b');
    console.assert(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
}
testCase();
