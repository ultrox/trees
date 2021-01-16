const { inorderTraversal } = require("../src/inorder");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// BT is one-of: 
// - false
// - new TreeNode(Int, BT, BT)

let BT0 = null;
let BT2 = new TreeNode(2);
let BT4 = new TreeNode(4);
let BT5 = new TreeNode(5);
let BT3 = new TreeNode(3, BT4, BT5);
let BT1 = new TreeNode(1, BT2, BT3);

it("basecase", function () {
  expect(inorderTraversal(BT0)).toEqual([]);
  expect(inorderTraversal(BT2)).toEqual([2]);
  expect(inorderTraversal(BT3)).toEqual([4, 3, 5]);
  expect(inorderTraversal(BT1)).toEqual([2, 1, 4, 3, 5]);
});
