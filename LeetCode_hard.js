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



//
