const { getTargetCopy } = require("../src/1379.find-corresponding-node");

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// BT is one-of:
// - null
// - new TreeNode(Int, BT, BT)

// function fn_for_bt(t) {
//   if(t === null) return "...";
//   else {
//     return (
//       t.val + "..." + // Int
//       fn_for_bt(t.left) + "..." +
//       fn_for_bt(t.right))
//   }
// }

let BT8 = new TreeNode(8);

let BT2 = new TreeNode(2); // left
BT2.left = BT8
BT2.right = null

let BT4 = new TreeNode(4);
let BT5 = new TreeNode(5);

let BT3 = new TreeNode(3); // right
BT3.left = BT4
BT3.right = BT5

let BT1 = new TreeNode(1); //root
BT1.left = BT2
BT1.right = BT3


//The values of the nodes of the tree are unique.
//target node is a node from the original tree and is not null.

it("basecase", function () {
  expect(getTargetCopy(null, null)).toBe(false);
});

it("On the node level - found / no found", function () {
  expect(getTargetCopy(BT8, BT8, new TreeNode(8))).toBe(new TreeNode(8));
});

it("on the left / right - found", function () {
  expect(getTargetCopy(BT3, BT3, new TreeNode(5))).toBe(BT5);
  expect(getTargetCopy(BT3, BT3, new TreeNode(4))).toBe(BT4);
});
