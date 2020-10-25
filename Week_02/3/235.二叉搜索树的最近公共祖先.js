/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    let hash = new Map
    let stack = [root]
    hash.set(root, null)
    while (stack.length) {
        let node = stack.pop()
        if (node.left) {
            hash.set(node.left, node)
            stack.push(node.left)
        }
        if (node.right) {
            hash.set(node.right, node)
            stack.push(node.right)
        }
    }
    let parent = new Set
    while (p) {
        parent.add(p)
        p = hash.get(p)
    }
    while (!parent.has(q)) {
        q = hash.get(q)
    }
    return q
};
// var lowestCommonAncestor = function (root, p, q) {
//     if (!root || root === p || root === q) return root
//     let left = lowestCommonAncestor(root.left, p, q)
//     let right = lowestCommonAncestor(root.right, p, q)
//     return (left && right) ? root : (left || right)
// };
// @lc code=end

