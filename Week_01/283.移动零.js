/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[left], nums[i]] = [nums[i], nums[left]]
            left++
        }
    }
};
// var moveZeroes = function (nums) {
//     let n = nums.length
//     if (n == 0) return
//     let insertPos = 0
//     for (let i = 0; i < n; i++) {
//         if (nums[i] !== 0) nums[insertPos++] = nums[i]
//     }
//     while (insertPos < n) {
//         nums[insertPos++] = 0
//     }
// };
// @lc code=end

