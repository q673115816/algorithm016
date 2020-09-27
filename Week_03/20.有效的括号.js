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
    if (s.length % 2 === 1) {
        return false;
    }
    let stack = []
    
    for (let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            stack.push(')')
        } else if(s[i] === '[') {
            stack.push(']')
        } else if(s[i] === '{') {
            stack.push('}')
        } else if(stack.length === 0 || stack.pop() !== s[i]) {
            return false
        }
    }
    return stack.length === 0
};
// var isValid = function (s) {
//     if (s.length % 2 === 1) {
//         return false;
//     }
//     let stack = []
//     let n = 0
//     let hash = {
//         '[': ']',
//         '{': '}',
//         '(': ')'
//     }
//     for (let i = 0; i < s.length; i++) {
//         if (['[', '{', '('].includes(s[i])) {
//             stack.push(s[i])
//             n++
//         } else if(hash[stack[n - 1]] === s[i]) {
//             n--
//             stack.pop()
//             if(n < 0) return false
//         } else {
//             return false
//         }
//     }
//     return n === 0
// };
// @lc code=end

