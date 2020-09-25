/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var postorderTraversal = function (root) {
    if(!root) return []
    let result = []
    let stack = [root]
    while(stack.length) {
        let node = stack.pop()
        result.push(node.val)
        if(node.left) stack.push(node.left)
        if(node.right) stack.push(node.right)
    }
    return result.reverse()
};
// var postorderTraversal = function(root) {
//     let result = []
//     dfs(root)
//     function dfs(node) {
//         if(node) {
//             if(node.left) dfs(node.left)
//             if(node.right) dfs(node.right)
//             result.push(node.val)
//         }
//     }
//     return result
// };
// @lc code=end

