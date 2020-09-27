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
    while(stack.length) {
        let node = stack.pop()
        if(node) {
            if(node.right) stack.push(node.right)
            if(node.left) stack.push(node.left)
            let temp = node.left
            node.left = node.right
            node.right = temp
        }
    }
    return root
};
// var invertTree = function(root) {
//     let temp
//     function dfs(node) {
//         if(node) {
//             if(node.left) dfs(node.left)
//             if(node.right) dfs(node.right)
//             temp = node.left
//             node.left = node.right
//             node.right = temp
//         }
//     }
//     dfs(root)
//     return root
// };
// @lc code=end

