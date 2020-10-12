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
    let hash = new Map
    for (let i = 0; i < nums.length; i++) {
        let s = target - nums[i]
        if (hash.has(s)) {
            return [hash.get(s), i]
        }
        hash.set(nums[i], i)
    }
    return false
};
// @lc code=end

