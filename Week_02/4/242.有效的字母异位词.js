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
    let hash = {}
    for (let i = 0; i < s.length; i++) {
        hash[s[i]] = hash[s[i]] + 1 || 1
    }
    for (let i = 0; i < t.length; i++) {
        if (hash[t[i]] && hash[t[i]] > 0) {
            hash[t[i]] = hash[t[i]] - 1
            if (hash[t[i]] === 0) delete hash[t[i]]
        } else {
            return false
        }
    }
    return Object.keys(hash).length === 0
};
// @lc code=end

