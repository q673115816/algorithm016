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
// var generateParenthesis = function (n) {
//     const result = []
//     function dfs(str = '', left = 0, right = 0) {
//         if(right === n) result.push(str)
//         if (left < n) {
//             dfs(str + '(', left + 1, right)
//         }
//         if (right < left) {
//             dfs(str + ')', left, right + 1)
//         }
//     }
//     dfs()
//     return result
// };
var generateParenthesis = function (n) {
    const result = []
    let temp = []
    function backtrack(left = 0, right = 0) {
        if (right === n) {
            result.push(temp.join(''))
            return
        }
        if(left < n) {
            temp.push('(')
            backtrack(left + 1, right)
            temp.pop()
        }
        if(right < left) {
            temp.push(')')
            backtrack(left, right + 1)
            temp.pop()
        }
    }
    backtrack()

    return result
};
// @lc code=end

