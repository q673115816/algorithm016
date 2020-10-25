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
        if (nums[mid] === target) return mid
        if (nums[mid] < nums[0]) {
            // （目标）|（目标）【前两都为right减】（当前取值）（目标）【此为特殊情况需要left加】
            if (target <= nums[n - 1] && target > nums[mid]) {
                // 两数都在较小区间且目标值更大
                left = mid + 1
            } else {
                right = mid - 1
            }
        } else {
            // （目标）【同上】（当前取值）（目标）|（目标）
            if (target >= nums[0] && target < nums[mid]) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        }
    }
    return -1
};
// @lc code=end

