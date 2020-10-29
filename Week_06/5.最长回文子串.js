/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let n = s.length
    let dp = Array.from({ length: n }, () => [])
    let result = ''
    for (let i = 0; i < n; i++) {
        for (let j = 0; i + j < n; j++) {
            let k = j + 1
            if(i === 0) {
                dp[j][k] = true
            } else if (i === 1) {
                dp[j][k] = (s[j] === s[k])
            } else {
                dp[j][k] = (s[j] === s[k] && dp[j + 1][k - 1])
            }
            if(dp[j][k] && i + 1> result.length) {
                    result = s.substr(j, i + j)
            }
        }
    }
    return result
};
// @lc code=end

