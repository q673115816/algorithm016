/*
 * @lc app=leetcode.cn id=429 lang=javascript
 *
 * [429] N叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return []
    let num = 0
    let level = 0
    let queue = [root]
    let result = []
    while (queue.length) {
        result.push([])
        num = queue.length
        for (let i = 0; i < num; i++) {
            const curr = queue.shift()
            if (!curr) continue
            result[level].push(curr.val)
            queue.push(...curr.children)
            // queue.concat(...curr.children)
        }
        level++
    }
    return result
};
// var levelOrder = function (root) {
//     if (!root) return []
//     let result = []
//     bfs(root, 0)
//     return result
//     function bfs(node, level) {
//         if (node) {
//             // result[level] === undefined ?
//             //  result[level] = [node.val] : 
//             // result[level].push(node.val)
//             if (level === result.length) {
//                 result.push([])
//             }
//             result[level].push(node.val)
//             for (let child of node.children) {
//                 bfs(child, level + 1)
//             }
//         }
//     };
// }
// @lc code=end

