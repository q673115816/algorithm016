/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function (root) {
    if (!root) return 0
    let deep = 0
    let stack = [root]
    while (stack.length) {
        let n = stack.length
        while(n--) {
            let node = stack.shift()
            stack.push(...node.children)
        }
        deep++
    }
    return deep
};
// @lc code=end

