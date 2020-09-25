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
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    let n = s.length
    let hash = {}
    for (let i = 0; i < n; i++) {
        hash[s[i]] = hash[s[i]] !== undefined ? hash[s[i]] + 1 : 1
    }

    for (let i = 0; i < n; i++) {
        if (hash[t[i]] === undefined) return false
        if (--hash[t[i]] < 0) return false
    }
    return true
};
// @lc code=end

