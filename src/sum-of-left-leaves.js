/*
BT is one-of: 
 - null
 - new TreeNode(Intager, BT, BT)
*/
function TreeNode(val = 0, left = null, right = null) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.key = val + "i";
}

/**
 * @param {TreeNode} root
 * @return {number}
 */

// BT -> Number
// sum all left leaf numbers
function sumOfLeftLeaves(bt) {
  function work(bt0, acc) {
    /* sumOfLeftLeaves2({v: 3, 9, 20}, "")
      for-3: work(9, L), work(20)
      for-9: work(null, L) work(null, R)
   */
    if (bt0 === null) {
      return 0;
    } else if (acc === "L" && bt.left === null && bt.right === null) {
      return (
        bt0.key + work(bt0.left || null, "L") + work(bt0.right || null, "R")
      );
    } else {
      return work(bt0.left || null, "L") + work(bt0.right || null, "R");
    }
  }

  return work(bt, "");
}

function isNull(a) {
  return a === null;
}

sumOfLeftLeaves(new TreeNode(2, new TreeNode(22), null)); // ?

module.exports = { sumOfLeftLeaves };
