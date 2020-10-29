/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let result = []
    let str = ''
    void function backtrack(left = 0, right = 0) {
        if (left < right) return
        if (left > n || right > n) return
        if (left === n && right === n) {
            result.push(str)
            return
        }
        str += '('
        backtrack(left + 1, right)
        str = str.slice(0, -1)
        str += ')'
        backtrack(left, right + 1)
        str = str.slice(0, -1)
    }()

    return result
};
// var generateParenthesis = function (n) {
//     let result = []
//     function dfs(str, l, r) {
//         if (r === n) {
//             result.push(str)
//             return
//         }
//         if (l < n) dfs(str + '(', l + 1, r)

//         if (l > r) {
//             dfs(str + ')', l, r + 1)
//         }
//     }
//     dfs('', 0, 0)
//     return result
// };
// @lc code=end

