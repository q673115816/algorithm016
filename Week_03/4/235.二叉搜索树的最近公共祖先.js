/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if(root === null) return root
    let stack = [root]
    let hash = new Map
    hash.set(root, null)
    while (stack.length) {
        let node = stack.pop()
        if(node.left) {
            stack.push(node.left)
            hash.set(node.left, node)
        }
        if(node.right) {
            stack.push(node.right)
            hash.set(node.right, node)
        }
    }
    let parent = new Set
    while(p !== null) {
        parent.add(p)
        p = hash.get(p)
    }
    while(!parent.has(q)) {
        q = hash.get(q)
    }
    return q
};
// var lowestCommonAncestor = function (root, p, q) {
//     if (!root || root === p || root === q) return root
//     let l = lowestCommonAncestor(root.left, p, q)
//     let r = lowestCommonAncestor(root.right, p, q)
//     return (l && r) ? root : (l || r)
// };
// @lc code=end

