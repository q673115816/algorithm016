/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const hash = []
    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - 97] = hash[s.charCodeAt(i) - 97] ? hash[s.charCodeAt(i) - 97] + 1 : 1
    }
    for(let i = 0;i<t.length;i++) {
        if(!hash[t.charCodeAt(i) - 97]) {
            return t[i]
        }
        hash[t.charCodeAt(i) - 97]--
    }
    return false
};
// @lc code=end

