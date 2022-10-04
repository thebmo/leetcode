// https://leetcode.com/problems/middle-of-the-linked-list/
import "../_test_helpers/_test_helpers"
import { MyNode } from "../_test_helpers/_test_helpers";



function middleNode(head: MyNode) {
    let nodes = [];

    nodes.push(head.val);

    while (head.next !== null) {
        head = head.next;
        nodes.push(head.val);
    }
    return nodes[Math.floor(nodes.length/2)];
}
