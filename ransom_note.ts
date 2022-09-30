// https://leetcode.com/problems/ransom-note/
function canConstruct(ransomNote: string, magazine: string) {
    let noteMap = new Map<string, number>();
    let magzMap = new Map<string, number>();
    let canConstruct = true;

    [ransomNote, magazine].forEach((word, idx) => {
        var map = idx == 0 ? noteMap : magzMap;
        for(var i=0; i < word.length; i++) {
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

    noteMap.forEach((val, key) => {
        var magVar = magzMap.get(key);
        if (magVar === undefined || magVar < val) {
            canConstruct = false;
        }
    });

    return canConstruct;
}

function testCase() {
    let ransomNote = 'I have SteVe!'
    let magazine = 'I have SteVe!'

    console.assert(canConstruct(ransomNote, magazine), `expecting true for ${ransomNote} : ${magazine}`);
    console.assert(canConstruct('a', 'b'), 'a != b');
    console.assert(canConstruct("bg", "efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"));
}

testCase();
