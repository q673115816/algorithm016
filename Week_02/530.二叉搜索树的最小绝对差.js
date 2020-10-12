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
var getMinimumDifference = function (root) {
    let min = Infinity
    let pre = Infinity
    let stack = []
    let node = root
    while(stack.length || node) {
        if(node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            min = Math.min(min, Math.abs(node.val - pre))
            pre = node.val
            node = node.right
        }
    }
    return min
};
// var getMinimumDifference = function (root) {
//     let min = Infinity
//     let pre = -1
//     dfs(root)
//     function dfs(node) {
//         if (node) {
//             dfs(node.left)
//             if(pre === -1) {
//                 pre = node.val
//             } else {
//                 min = Math.min(min, Math.abs(node.val - pre))
//                 pre = node.val
//             }
//             dfs(node.right)
//         }
//     }
//     return min
// };

// @lc code=end

