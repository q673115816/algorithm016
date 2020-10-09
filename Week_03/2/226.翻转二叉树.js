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
// recursion
var invertTree = function (root) {
    if (root) {
        [root.left, root.right] = [invertTree(root.right), invertTree(root.left)]
    }
    return root
};
// bfs 队列
// var invertTree = function (root) {
//     let stack = [root]
//     while (stack.length) {
//         let node = stack.shift()
//         if (node) {
//             [node.left, node.right] = [node.right, node.left]
//             stack.push(node.left, node.right)
//         }
//     }
//     return root
// };
// dfs 栈
// var invertTree = function (root) {
//     let stack = [root]
//     while (stack.length) {
//         let node = stack.pop()
//         if (node) {
//             [node.left, node.right] = [node.right, node.left]
//             stack.push(node.left, node.right)
//         }
//     }
//     return root
// };
// dfs
// var invertTree = function (root) {
//     let temp
//     function dfs(node) {
//         if (node) {
//             temp = node.left
//             node.left = node.right
//             node.right = temp
//             if (node.left) dfs(node.left)
//             if (node.right) dfs(node.right)
//         }
//     }
//     dfs(root)
//     return root
// };
// @lc code=end

