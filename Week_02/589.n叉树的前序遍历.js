/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    if (!root) return []
    let result = []
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        result.push(node.val)
        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i])
        }
    }
    return result
};
// var preorder = function (root) {
//     let result = []
//     void function dfs(node) {
//         if (node) {
//             result.push(node.val)
//             for (let i = 0; i < node.children.length; i++) {
//                 dfs(node.children[i])
//             }
//         }
//     }(root)
//     return result
// };
// @lc code=end

