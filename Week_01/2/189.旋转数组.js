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
    let count = 0
    k = k % n
    for (let i = 0; count < n; i++) {
        let curr = i
        let prev = nums[curr]
        do {
            let next = (k + curr) % n
            let temp = nums[next]
            nums[next] = prev
            prev = temp
            curr = next
            count++
        } while (curr !== i);
    }
};
// loop
// var rotate = function (nums, k) {
//     let prev
//     let tmp
//     let n = nums.length
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
// jsapi
// var rotate = function (nums, k) {
//     while(k > 0) {
//         nums.unshift(nums.pop())
//         k--
//     }
// };
// @lc code=end

