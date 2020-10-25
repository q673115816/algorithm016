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
    let result = []
    let queue = [root]
    while (queue.length) {
        const n = queue.length
        let level = []
        for (let i = 0; i < n; i++) {
            let node = queue.shift()
            for (let i = 0; i < node.children.length; i++) {
                queue.push(node.children[i])
            }
            level.push(node.val)
        }
        result.push(level)
    }
    return result
};
// @lc code=end

