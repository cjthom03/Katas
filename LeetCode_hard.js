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

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
  // create a divider node
  // create pointer variable to newHead
  // attach the divider to the list as the head node

  // go down the linked list, starting from the divider, k times
  //   if you get to the end of the list, break -- you are done
  // if there is no newHead, set the newHead and have it point to the divider
  // 'remove' that node from its usual place in the list
  // decrement k
  // repeat


  // return newHead

};

//
