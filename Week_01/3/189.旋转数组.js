/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    let n = nums.length
    k = k % n
    if (k === 0) return
    let count = 0
    for (let i = 0; count < n; i++) {
        let curr = i
        let prev = nums[i]
        do {
            let next = (curr + k) % n
            let tmp = nums[next]
            nums[next] = prev
            prev = tmp
            curr = next
            count++
        } while (i !== curr);
    }
};
// loop
// var rotate = function (nums, k) {
//     let tmp
//     let n = nums.length
//     let prev
//     while (k > 0) {
//         prev = nums[n - 1]
//         for (let i = 0; i < n; i++) {
//             tmp = nums[i]
//             nums[i] = prev
//             prev = tmp
//         }
//         k--
//     }
// };
// api 暴力
// var rotate = function(nums, k) {
//     while(k > 0) {
//         nums.unshift(nums.pop())
//         k--
//     }
// };
// @lc code=end

