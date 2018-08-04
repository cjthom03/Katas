// 4.2 Minimal Tree
// Given a sorted (ascending order) array with unique integer elements,
// write an algorithm to build a binary search tree with minimal height

function BSTNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function minimalBST(array) {
  if(!array.length) { return null; }
  const midpoint = Math.floor(array.length / 2);
  const rootNode = new BSTNode(array[midpoint]);

  let left = array.slice(0, midpoint);
  let right = array.slice(midpoint + 1);

  rootNode.left = minimalBST(left);
  rootNode.right = minimalBST(right);

  return rootNode;
}


// #======================================================================
// #======================================================================
//
// 4.3 List of Depths
// Given a binary tree, design an algorithm which creates a linked list of all
// the nodes at each depth (e.g. if you have a tree with depth D, you'll have
// D linked lists)


// #======================================================================
// #======================================================================
