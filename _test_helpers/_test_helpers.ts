export function arraysEqual(actual: Array<string>, expected: Array<string>) {
    if (actual.length !== expected.length)
        return false;

    for (var i=0; i < actual.length; i++) {
        if (actual[i] !== expected[i])
            return false
    }

    return true
}