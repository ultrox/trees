/* 
BT is one-of:
 - null
 - new TreeNode(String, BT BT)
*/
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/* template
function fnForBT(t) {
    if(t === null) {
        return "...";
    } else {
        return t.val ... 
               fnForBT(t.l) ...
               fnForBT(t.r) ...
    }
}
*/

// BT -> String
// serialize (convert) TreeNode into valid string representation
function serialize(tree) {
  function work(t) {
    if (t == undefined) {
      return null;
    } else {
      return t.val + "," + work(t.left) + "," + work(t.right);
    }
  }

  let result = work(tree);
  return result ? `[${result}]` : null;
}

// String -> BT
// convert string to Binary Tree structure
// [] -> null
// [2,null,null] -> {val: l: null, r: null}
// [3,4,null,null,5,null,null]
// {val:3 l: {val: 4, l: null, r: null},
//        r: {val: 5, l: null, r: null}}
function deserialize(str) {
  const items = JSON.parse(str);

  function work(items) {
    if (isEmpty(items)) return null;
    let val = first(items);
    if (val === null) {
      return null;
    } else {
      let node = new TreeNode(val);
      node.left = work(items);
      node.right = work(items);
      return node;
    }
  }

  return work(items); // trampoline
}

function isEmpty(a) {
  return a.length === 0;
}

function first(arr) {
  return arr.shift();
}

module.exports = { serialize, TreeNode, deserialize };
