/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const n = s.length
    for (let i = 0; i < n; i++) {
        if(s[i] === '(') {
            stack.push(')')
        } else if(s[i] === '{') {
            stack.push('}')
        } else if(s[i] === '[') {
            stack.push(']')
        } else  {
            if (stack.pop() !== s[i]) {
                return false
            }
        }
    }
    return stack.length === 0
};
// @lc code=end

