// Given an unsorted integer array, find the smallest missing positive integer.
//
// Example 1:
// Input: [1,2,0]
// Output: 3

// Example 2:
// Input: [3,4,-1,1]
// Output: 2

// Example 3:
// Input: [7,8,9,11,12]
// Output: 1

// Note: Your algorithm should run in O(n) time and uses constant extra space.

/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(!nums.length) { return 1; }
    let arr = new Array(Math.max(...nums) + 1);
    arr[0] = true;

    for(let i=0; i < nums.length; i++) {
        let val = nums[i] > 0 ? nums[i] : 0;
        arr[val] = true;
    }

    for(let j=0; j < arr.length; j++) {
        if(arr[j] !== true) { return j; }
    }

    return arr.length;

};

// =====================================================================
// =====================================================================

// Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.
//
// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.
//
// Example:
//
// Given this linked list: 1->2->3->4->5
//
// For k = 2, you should return: 2->1->4->3->5
//
// For k = 3, you should return: 3->2->1->4->5
//
// Note:
//
// Only constant extra memory is allowed.
// You may not alter the values in the list's nodes, only nodes itself may be changed.


 // Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
 }

 // * @param {ListNode} head
 // * @param {number} k
 // * @return {ListNode}
 // */
var reverseKGroup = function(head, k) {
  // create a divider node
  // create pointer variable to newHead
  // attach the divider to the list as the head node

  const divider = new ListNode('divider');
  divider.next = head;

  let newHead;
  let newTail;
  let prevNode;
  let currentNode;

  while (true) {

    for (let i = k; i > 0; i--) {
      currentNode = divider;

      for (let n = 0; n < i; n++) {
        prevNode = currentNode;
        currentNode = currentNode.next;
        if(currentNode === null) {
          if(!newTail) {
            return head; 
          } else {
            // remove the divider
            newTail.next = divider.next;
            return newHead;
          }
        }
      }

      prevNode.next = currentNode.next;
      currentNode.next = divider;

      if (newHead === undefined) {
        newHead = currentNode;
        newTail = currentNode;
      } else {
        newTail.next = currentNode;
        newTail = currentNode;
      }

    }
  }
};

//
