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

  //Use the BSTNodes defined in 4.2 above
  // Even though this is just a binary tree and not a BST

  function ListNode(val) {
    this.val = val;
    this.next = null;
  }

  function listOfDepths(rootNode) {
    const lists = {};

    const _createLists = (root, level) => {
      if(root === null) { return; }
      let newListNode = new ListNode(root.val);

      if(lists[level] !== undefined) { newListNode.next = lists[level]; }
      lists[level] = newListNode;

      level++;
      _createLists(root.left, level);
      _createLists(root.right, level);
    };

    _createLists(rootNode, 1);
    return lists;
  }

// TEST CODE
//   let nodeA = new BSTNode("a");
//   let nodeB = new BSTNode("b");
//   let nodeC = new BSTNode("c");
//   let nodeD = new BSTNode("d");
//   let nodeE = new BSTNode("e");
//   let nodeF = new BSTNode("f");
//   let nodeG = new BSTNode("g");
//   nodeA.left = nodeB;
//   nodeA.right = nodeC;
//   nodeB.left = nodeD;
//   nodeB.right = nodeE;
//   nodeC.left = nodeF;
//   nodeF.left = nodeG;
//
//   console.log(nodeA);
//   const listOfLists = listOfDepths(nodeA);
//   console.log(listOfLists);

// #======================================================================
// #======================================================================
