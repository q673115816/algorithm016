/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// unicode
var isAnagram = function (s, t) {
    let hash = {}
    for (let i of s) {
        hash[i] = hash[i] + 1 || 1
    }
    for (let i of t) {
        if (!hash[i]) return false
        hash[i]--
        if (hash[i] === 0) delete hash[i]
    }
    return Object.keys(hash).length === 0
};
// var isAnagram = function (s, t) {
//     let hash = Array(26).fill(0)
//     for (let i = 0; i < s.length; i++) {
//         hash[s[i].charCodeAt() - 97]++
//     }
//     for (let i = 0; i < t.length; i++) {
//         if (--hash[t[i].charCodeAt() - 97] < 0) {
//             return false
//         }
//     }
//     return hash.every(item => item === 0)
// };
// @lc code=end

