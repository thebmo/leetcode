export function arraysEqual(actual: Array<string>, expected: Array<string>) {
    if (actual.length !== expected.length)
        return false;

    for (var i=0; i < actual.length; i++) {
        if (actual[i] !== expected[i])
            return false
    }

    return true
}

export class MyNode {
    val: number;
    next: MyNode | null;

    constructor(val: number, next?: MyNode) {
        this.val = val;
        this.next = (next === undefined ? null: next) ;
    }
}
