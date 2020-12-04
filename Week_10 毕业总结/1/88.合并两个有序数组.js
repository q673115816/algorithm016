/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m]
        } else {
            nums1[m + n - 1] = nums2[--n]
        }
    }
    // 若m未完则天然有序
    while (n > 0) nums1[m + n - 1] = nums2[--n]
};
// @lc code=end

