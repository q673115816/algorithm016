/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
var preorderTraversal = function (root) {
    if (!root) return []
    let result = []
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        result.push(node.val)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
    return result
};
// var preorderTraversal = function(root) {
//     let result = []
//     dfs(root)
//     function dfs(node) {
//         if(node) {
//             result.push(node.val)
//             if(node.left) dfs(node.left)
//             if(node.right) dfs(node.right)
//         }
//     }
//     return result
// };
// @lc code=end

