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


// ===================================================================
// ===================================================================

// Given a linked list, remove the n-th node from the end of list and return its head.
//
// Example:
// Given linked list: 1->2->3->4->5, and n = 2.
// After removing the second node from the end, the linked list becomes 1->2->3->5.
//
// Note: Given n will always be valid.
// Follow up:Could you do this in one pass?



/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  // create a queue of size n + 1
  // iterate over the list completely, filling the queue
  // Edge case, if n >= list.length / reset pointers and return head.next
  // else, reset the pointers for the node @ index 1
  // return head

  const queue = [];
  const queueSize = n + 1;
  let node = head;

  while (node !== null) {
      queue.push(node);
      if(queue.length > queueSize) { queue.shift(); }
      node = node.next;
  }

  if(queue.length <= n) {
      node = head;
      head = head.next;
      node.next = null;
      return head;
  }

  queue[0].next = queue[2];
  queue[1].next = null;

  return head;
};


// ===================================================================
// ===================================================================

// The string "PAYPALISHIRING" is written in a zigzag pattern on a
// given number of rows like this: (you may want to display this
// pattern in a fixed font for better legibility)
//
// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"
//
// Write the code that will take a string and make this conversion
// given a number of rows:
//
// string convert(string s, int numRows);
// Example 1:
// Input: s = "PAYPALISHIRING", numRows = 3
// Output: "PAHNAPLSIIGYIR"
  // [P, A, H, N], [A, P, L, S, I, I, G], [Y, I, R]

// Example 2://
// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"

// Explanation:
//
// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  // Create an array of n empty strings, where n = numRows
  // Create a variable to track the index in the string
  // Loop for the length of the string
  // From 0 - numRows, concat letter at index onto each string
    // if index > string.length, break
    // index ++
  // From numRows - 2 to 0, concat letter at index onto each string
    // check for break condition && index ++
  // Join the strings together, return

  let idx = 0;
  const strings = new Array(numRows);
  for(let i = 0; i < numRows; i ++) {
      strings[i] = "";
  }

  while(idx < s.length) {
      for(let i = 0; i < numRows; i++) {
          if(idx >= s.length) { break; }
          let newString = strings[i].concat(s[idx]);
          strings[i] = newString;
          idx++;
      }

      for(let i = numRows - 2; i > 0; i--) {
          if(idx >= s.length) { break; }
          let newString = strings[i].concat(s[idx]);
          strings[i] = newString;
          idx++;
      }
  }

  return strings.join("");

};




//
