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
// Given "dvdf", the answer is 'vdf', with the length of 3
// Note that the answer must be a substring,
// "pwke" is a subsequence and not a substring.
//
// /**
//  * @param {string} s
//  * @return {number}
//  */
var lengthOfLongestSubstring = function(s) {

//    create a values hash, 'start' pointer = 0, 'longest' = 0

//    iterate over the letters in the string
//    check if the letter is already in the hash
//      if the value/idx is >= to start
//        move the start point to right after the first repeated letter
//        start += index of repeated letter (from hash) + 1
//    add the letter:index to the hash
//    measure the current length, reset longest if needed
    let lettersHash = {};
    let start = 0;
    let longest = 0;

    for(let i = 0; i < s.length; i++) {
        let letter = s[i];

        if(lettersHash[letter] >= start) {
            start = lettersHash[letter] + 1;
        }
        lettersHash[letter] = i;
        let currentLength = i - start + 1;
        longest = Math.max(currentLength, longest);
    }
    return longest;
};
//
