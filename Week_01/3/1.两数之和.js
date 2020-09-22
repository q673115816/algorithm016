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
    let n = nums.length
    let temp = 0
    for (let i = 0; i < n; i++) {
        temp = target - nums[i]
        if(hash.has(temp)) {
            return [hash.get(temp), i]
        }
        hash.set(nums[i], i)
    }
};
// @lc code=end

