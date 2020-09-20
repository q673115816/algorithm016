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
// 77.99 79.42
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let hash = Array(26).fill(0)
    for (let i = 0; i < s.length; i++) {
        hash[s[i].charCodeAt() - 97]++
    }
    for (let i = 0; i < s.length; i++) {
        hash[t[i].charCodeAt() - 97]--
        if (hash[t[i].charCodeAt() - 97] < 0) {
            return false
        }
    }

    return true
};

// 93.79 83.89
// var isAnagram = function (s, t) {
//     if (s.length !== t.length) return false
//     let hash = Array(26).fill(0)
//     for (let i = 0; i < s.length; i++) {
//         hash[s[i].charCodeAt() - 97]++
//         hash[t[i].charCodeAt() - 97]--
//     }
//     return hash.every(num => num === 0)
// };
// @lc code=end

