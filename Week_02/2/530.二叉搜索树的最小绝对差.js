/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
 * @return {number}
 */
// 二叉搜索树中序单调
var getMinimumDifference = function (root) {
    let min = Infinity
    let pre = Infinity
    void function dfs(node) {
        if (node) {
            dfs(node.left)
            min = Math.min(min, Math.abs(node.val - pre))
            pre = node.val
            dfs(node.right)
        }
    }(root)
    return min
};
// @lc code=end

