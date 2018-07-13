// /**
//  * Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
//  */
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function(l1, l2) {
    let headNode = new ListNode(0);
    let node = headNode;
    node.val = l1.val + l2.val;
    let overflow = handleOverflow(node);

    while(l1.next !== null || l2.next !== null || overflow === 1) {
        l1 = l1.next ? l1.next : new ListNode(0);
        l2 = l2.next ? l2.next : new ListNode(0);
        node.next = new ListNode(l1.val + l2.val + overflow);
        node = node.next;
        overflow = handleOverflow(node);
    }

    return headNode;
};

var handleOverflow = function(node) {
    if (node.val > 9) {
        node.val -= 10;
        return 1;
    }
    return 0;
};

// ===================================================================
// ===================================================================


// 
