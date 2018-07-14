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

// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
// Given "abcabcbb", the answer is "abc", which the length is 3.
// Given "bbbbb", the answer is "b", with the length of 1.
// Given "pwwkew", the answer is "wke", with the length of 3.
// Note that the answer must be a substring,
// "pwke" is a subsequence and not a substring.
//
// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {

//     create a values hash
//     create a counter var & a longest var (int)
//     iterate over the letters in the string
//     check if the letter is already in the hash
//          if it is:
//                reset the hash (with the current letter as a value)
//                reset the counter to 1
//          other wise:
//                 add the letter to the hash
//                 increment the counter
//      compare the counter to the longest var, reset longest if need be
//     return longest


};
//
