/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let n = nums.length
    let left = 0
    let right = n - 1
    while (left <= right) {
        let mid = left + ((right - left) >> 1)
        if (target === nums[mid]) return mid
        if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (nums[mid] < target && target <= nums[n - 1]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

