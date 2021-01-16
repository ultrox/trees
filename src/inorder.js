/**
 * @param {TreeNode} root
 * @return {number[]}
 */

function inorderTraversal(t) {
    if(t === null) return []
    return inorderTraversal(t.left).concat(t.val, inorderTraversal(t.right))
}

module.exports = { inorderTraversal };
