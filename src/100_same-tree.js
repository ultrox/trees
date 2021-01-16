/**
 * @param {TreeNode}
 * @param {TreeNode}
 * @return  {boolean}
 * @description return true if first tree (t0) is identical to second tree t1
 *              when both null return true
 */

// function isSameTree(t0, t1) {

//   function serialize(t) {
//     if (t === null) return "";
//     else {
//       return (
//         t.val + serialize(t.left) + serialize(t.right)
//       );
//     }
//   }

//   return serialize(t0) === serialize(t1)
// }

// BT BT -> Boolean
function isSameTree(t0, t1) {
  if(t0 === null && t1 === null) return true;
  if(t0 == null || t1 === null) return false;

    return (
      t0.val === t1.val && 
      isSameTree(t0.left, t1.left) &&
      isSameTree(t0.right, t1.right)
    )
}


module.exports = { isSameTree };
