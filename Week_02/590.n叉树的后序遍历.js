/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
// 镜像树的前序遍历再翻转
var postorder = function (root) {
    if (!root) return []
    let result = []
    let stack = [root]
    while (stack.length) {
        let node = stack.pop()
        result.push(node.val)
        stack.push(...node.children)
    }
    return result.reverse()
};
// var postorder = function (root) {
//     let result = []
//     void function dfs(node) {
//         if (node) {
//             for (child of node.children) dfs(child)
//             result.push(node.val)
//         }
//     }(root)
//     return result
// };
// @lc code=end

