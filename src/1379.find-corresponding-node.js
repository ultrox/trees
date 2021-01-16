/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

function getTargetCopy(t0, t1, target) {
  if(t0 === null) return false;
  else {
    return (
      t0.val + "..." +
      t1.val + "..." +
      target + "..." +
      getTargetCopy(t0.left, t1.left, target) + "..." +
      getTargetCopy(t0.right, t1.left, target)
    )
  }
}

module.exports = { getTargetCopy };
