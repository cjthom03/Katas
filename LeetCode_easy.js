// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  //iterate over each word in the array
  // check the letter at index i
  // break out of the loop if there is no letter at index i
  // store the letter from the first word
  // if the letter is different in any word after the first, break out of the loop
  // if the letters are all the same, store the letter in a result string
  //  return the result string
  let result = "";

  if(!strs.length) { return result; }

  for (let i = 0; i < strs[0].length; i++) {
    let letter = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (i >= strs[j].length || strs[j][i] !== letter) {
        return result;
      }
    }
    result += letter;
  }


return result;


  return result;


};
