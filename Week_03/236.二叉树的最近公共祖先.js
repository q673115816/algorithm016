/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
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
// en loop
var lowestCommonAncestor = function (root, p, q) {
    let parent = new Map
    let stack = [root]
    parent.set(root, null)
    while(!parent.has(p) || !parent.has(q)) {
        let node = stack.pop()
        if(node) {
            if(node.left !== null) {
                parent.set(node.left, node)
                stack.push(node.left)
            }
            if(node.right !== null) {
                parent.set(node.right, node)
                stack.push(node.right)
            }
        }
    }
    let ancestors = new Set
    while(p !== null) {
        ancestors.add(p)
        p = parent.get(p)
    }
    while(!ancestors.has(q)) {
        q = parent.get(q)
    }
    return q
};
// en dfs
// function lowestCommonAncestor(root, p, q) {
//     if (!root || root === p || root === q) return root;
//     var resL = lowestCommonAncestor(root.left, p, q);
//     var resR = lowestCommonAncestor(root.right, p, q);
//     return (resL && resR) ? root : (resL || resR);
// }
// cn dfs
// var lowestCommonAncestor = function (root, p, q) {
//     let result
//     const dfs = (node, p, q) => {
//         if(node === null) return false
//         const lson = dfs(node.left, p, q)
//         const rson = dfs(node.right, p, q)
//         if ((lson && rson) ||
//             ((node.val === p.val) || node.val === q.val) && (lson || rson)) {
//             result = node
//         }
//         return lson || rson || (node.val === p.val || node.val === q.val)
//     }
//     dfs(root, p, q)
//     return result
// };
// @lc code=end

