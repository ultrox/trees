const { fn_for_bt } = require("../src/same-tree");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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

let BT0 = null;
let BT8 = new TreeNode(8, BT0, BT0)
let BT2 = new TreeNode(2, BT8, null);
let BT4 = new TreeNode(4);
let BT5 = new TreeNode(5);
let BT3 = new TreeNode(3, BT4, BT5);
let BT1 = new TreeNode(1, BT2, BT3);

it("basecase", function () {
  expect(fn_for_bt(BT0)).toEqual([]);
});
