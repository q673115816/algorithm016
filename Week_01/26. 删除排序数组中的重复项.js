/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[left] !== nums[i]) {
            if (left + 1 === i) {
                left++
                continue
            }
            nums[++left] = nums[i]
        }
    }
    return left + 1
};
// @lc code=end

