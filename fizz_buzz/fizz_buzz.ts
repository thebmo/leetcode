// https://leetcode.com/problems/fizz-buzz/
import { arraysEqual } from "../_test_helpers/_test_helpers"

// @returns { Array<string> }
function fizzBuzz(n: number) {
    let fizzBuzzArr = new Array<string>();

    for (var i = 1; i <= n; i++) {
        if (i % 5 === 0 && i % 3 === 0)
        {
            fizzBuzzArr.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fizzBuzzArr.push("Fizz");
        } else if (i % 5 === 0) {
            fizzBuzzArr.push("Buzz");

        } else {
            fizzBuzzArr.push(i.toString());
        }
    }

    return fizzBuzzArr;
}

function fizzBuzzTest() {
    let testMap = new Map<number, Array<string>>();
    testMap.set(3, ["1","2","Fizz"])
    testMap.set(5,["1","2","Fizz","4","Buzz"])
    testMap.set(15, ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]);

    testMap.forEach((expected, val) => {
        console.assert(arraysEqual(fizzBuzz(val), expected), `expected ${expected} : got ${fizzBuzz(val)}`);
    });
}

fizzBuzzTest();

