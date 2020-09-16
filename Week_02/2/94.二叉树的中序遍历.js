/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
// 迭代
var inorderTraversal = function (root) {
    if (!root) return []
    let stack = []
    let result = []
    let node = root
    while (stack.length || node) {
        if(node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            result.push(node.val)
            node = node.right
        }

    }
    return result
};
// var inorderTraversal = function (root) {
//     if(!root) return []
//     let stack = [root]
//     let result = []
//     let node
//     while(stack.length) {
//         node = stack.pop()
//         if(typeof node === 'object') {
//             if(node.right) stack.push(node.right)
//             stack.push(node.val)
//             if(node.left) stack.push(node.left)
//         } else {
//             result.push(node)
//         }

//     }
//     return result
// };
// 递归
// var inorderTraversal = function(root) {
//     let result = []
//     dp(root, result)
//     return result
//     function dp(node, root) {
//         if(!node) return 
//         if(node.left) dp(node.left, result)
//         result.push(node.val)
//         if(node.right) dp(node.right, result)
//     }
// };
// @lc code=end

