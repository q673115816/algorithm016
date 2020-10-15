/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
    let stack = [root]
    let parent = new Map()
    parent.set(root, null)
    while (stack.length) {
        let node = stack.pop()
        if (node) {
            if (node.right) {
                stack.push(node.right)
                parent.set(node.right, node)
            }
            if (node.left) {
                stack.push(node.left)
                parent.set(node.left, node)
            }
        }
    }
    let p_parent = new Set
    while(p !== null) {
        p_parent.add(p)
        p = parent.get(p)
    }
    while(!p_parent.has(q)) {
        q = parent.get(q)
    }
    return q
};
// var lowestCommonAncestor = function (root, p, q) {
//     if (root === null || root === p || root === q) return root
//     let left = lowestCommonAncestor(root.left, p, q)
//     let right = lowestCommonAncestor(root.right, p, q)
//     return (left && right) ? root : (left || right)
// };
// @lc code=end

