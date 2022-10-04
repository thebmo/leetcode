"use strict";
exports.__esModule = true;
// https://leetcode.com/problems/middle-of-the-linked-list/
require("../_test_helpers/_test_helpers");
function middleNode(head) {
    var nodes = [];
    nodes.push(head.val);
    while (head.next !== null) {
        head = head.next;
        nodes.push(head.val);
    }
    return nodes[Math.floor(nodes.length / 2)];
}
