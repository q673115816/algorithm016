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
     if(!root) return []
    let result = []
    let stack = []
    let node = root
    while(stack.length || node) {
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
//     let result = []
//     dfs(root)
//     function dfs(node) {
//         if(node) {
//             if(node.left) dfs(node.left)
//             result.push(node.val)
//             if(node.right) dfs(node.right)
//         }
//     }
//     return result
// };
// @lc code=end

