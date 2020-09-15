/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    let result = []
    // console.log(root);
    dp(root, result)
    return result
};

function dp(node, result) {
    if (!node || !node.val) return
    dp(node.left, result)
    result.push(node.val)
    dp(node.right, result)
}
// @lc code=end

