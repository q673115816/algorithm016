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
    if(root) {
        let stack = [root]
        let node
        let tmp
        while (stack.length) {
            node = stack.pop()
            tmp = node.right
            node.right = node.left
            node.left = tmp
            if (node.right) stack.push(node.right)
            if (node.left) stack.push(node.left)
        }
    }
    return root
};

// var invertTree = function (root) {
//     if(root) {
//         let right = root.right
//         root.right = invertTree(root.left)
//         root.left = invertTree(right)
//     }
//     return root
// };
// var invertTree = function(root) {
//     dp(root)
//     return root
//     function dp(node) {
//         if(!node) return
//         let tmp
//         tmp = node.left
//         node.left = node.right
//         node.right = tmp
//         if(node.left) dp(node.left)
//         if(node.right) dp(node.right)
//     }
// };
// @lc code=end

