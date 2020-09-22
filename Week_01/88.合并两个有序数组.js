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
    // let i = m - 1
    // let j = n - 1
    // let k = m + n - 1
    while (m > 0 && n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m]
        } else {
            nums1[m + n - 1] = nums2[--n]
        }
    }
    while (n > 0) nums1[m + n - 1] = nums2[--n]
};
// api 100!
// var merge = function(nums1, m, nums2, n) {
//     let i = 0
//     nums1.forEach((item, index) => {
//         if(index >= m && item === 0) {
//             nums1[index] = nums2[i++]
//         }
//     })

//     nums1.sort((a, b) => a - b)
// };
// @lc code=end

