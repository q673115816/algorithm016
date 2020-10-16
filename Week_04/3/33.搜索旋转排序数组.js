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
        let mid = left + ((right - left) >>> 1)
        if (target === nums[mid]) return mid
        if (nums[mid] >= nums[0]) {
            if (nums[0] <= target && nums[mid] > target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if (target > nums[mid] && target <= nums[n -1]) {// 边界注意相等
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1
};
// @lc code=end

