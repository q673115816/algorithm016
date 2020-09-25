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
    let n = nums.length
    let hash = new Map
    for (let i = 0; i < n; i++) {
        let s = target - nums[i]
        if(hash.has(s)) {
            return [hash.get(s), i]
        } else {
            hash.set(nums[i], i)
        }
    }
};
// @lc code=end

