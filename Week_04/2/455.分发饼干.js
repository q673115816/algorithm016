/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * @param {number[]} k // 孩子
 * @param {number[]} c // 饼干
 * @return {number}
 */
var findContentChildren = function (kids, cooks) {
    kids.sort((a, b) => a - b)
    cooks.sort((a, b) => a - b)
    let result = 0
    for (let cook of cooks) {
        // 若饼干大于或等于胃口则满足当前
        // 得饼干覆盖量？
        if (cook >= kids[result]) result++
    }
    return result
};
// @lc code=end

