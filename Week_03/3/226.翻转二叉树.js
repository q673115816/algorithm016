/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
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
 * @return {TreeNode}
 */

var invertTree = function (root) {
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        if (node) {
            [node.left, node.right] = [node.right, node.left]
            stack.push(node.right)
            stack.push(node.left)
        }
    }
    return root
};
// var invertTree = function (root) {
//     function dfs(node) {
//         if (node) {
//             [node.right, node.left] = [node.left, node.right]
//             dfs(node.left)
//             dfs(node.right)
//         }
//     }
//     dfs(root)
//     return root
// };
// @lc code=end

