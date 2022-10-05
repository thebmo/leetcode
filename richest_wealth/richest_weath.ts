// https://leetcode.com/problems/richest-customer-wealth/
import '../_test_helpers/_test_helpers'

function maximumWealth(accounts: Array<Array<number>>) {
    let highest = 0;

    accounts.forEach(act => {
        let sum = act.reduce((prev, curr) => curr + prev, 0);

        highest = sum > highest ? sum : highest;
    });

    return highest;
}

function maximumWealthTests() {
    let testMap = new Map();
    testMap.set(1, [[1]]);
    testMap.set(6, [[1,2,3],[3,2,1]]);
    testMap.set(10, [[1,5],[7,3],[3,5]]);
    testMap.set(17, [[2,8,7],[7,1,3],[1,9,5]]);

    testMap.forEach((accounts, expected) => {
        console.assert(maximumWealth(accounts) === expected, `expected: ${expected}: actual ${maximumWealth(accounts)}`);
    });

}

maximumWealthTests();