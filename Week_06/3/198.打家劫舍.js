/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let prev = 0
    let next = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        let temp = prev
        prev = Math.max(next + nums[i], prev)
        next = temp
        // [prev, next] = [Math.max(next + nums[i], prev), prev]
    }
    return prev
};
// @lc code=end

