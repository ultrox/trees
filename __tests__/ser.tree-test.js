const {serialize, TreeNode} = require("../src/ser-tree");
  let BT0 = null;
  let BT2 = new TreeNode(2); // ?
  let BT4 = new TreeNode(4);
  let BT5 = new TreeNode(5);
  // BT3
  let BT3 = new TreeNode(3);
  BT3.left = BT4;
  BT3.right = BT5

  // BT1
  let BT1 = new TreeNode(1);
  BT1.left = BT2
  BT1.right = BT3

it("serialize", function () {

  expect(serialize(null)).toEqual(null);
  expect(serialize(BT2)).toEqual('[2,null,null]');
  expect(serialize(BT3)).toEqual('[3,4,null,null,5,null,null]');
  expect(serialize(BT1)).toEqual('[1,2,null,null,3,4,null,null,5,null,null]');
});


it("deserialize", function () {
  const {deserialize, TreeNode} = require("../src/ser-tree");
  expect(deserialize("[]")).toEqual(null);
  expect(deserialize(serialize(BT2))).toEqual(BT2);
  expect(deserialize(serialize(BT3))).toEqual(BT3);
  expect(deserialize(serialize(BT1))).toEqual(BT1);

  // deserialize(serialize("[]")); // ?
});
