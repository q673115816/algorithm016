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
    let result = []
    let stack = []
    let node = root
    while (stack.length || node) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            result.push(node.val)
            node = node.right
        }
    }
    // 前序写法 82.24% 居然最快
    // if(!root) return []
    // let result = []
    // let stack = []
    // let node
    // stack.push(root)
    // while (stack.length) {
    //     node = stack.pop()
    //     if(node && node.val) {
    //         if(node.right) stack.push(node.right)
    //         stack.push(node.val)
    //         if(node.left) stack.push(node.left)
    //     } else {
    //         result.push(node)
    //     }
    // }
    // return result
};

// @lc code=end

