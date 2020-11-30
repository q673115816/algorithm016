/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const hash = new Map
    const n = nums.length
    for (let i = 0; i < n; i++) {
        const other = target - nums[i]
        if (hash.has(other)) return [hash.get(other), i]
        hash.set(nums[i], i)
    }
    return false
};
// @lc code=end

