/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const n = nums.length
    if (n === 0) return 0
    const dp = [1]
    for (let i = 1; i < n; i++) {
        dp[i] = 1
        for (let j = 0; j < i; j++) {
            if(nums[i] > nums[j]) {// 比之前的某个数大时
                // 则从该数的子序列长度加1与当前持续比较得出最长子序列
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }
    return Math.max.apply(null, dp)
};
// var lengthOfLIS = function (nums) {
//     const n = nums.length
//     if (n === 0) return 0
//     let result = [nums[0]]
//     let count = 1
//     for (let i = 1; i < n; i++) {
//         if (nums[i] > result[count - 1]) {
//             result.push(nums[i])
//             count++
//         } else {
//             for (let j = 0; j < count; j++) {
//                 if (nums[i] <= result[j]) {
//                     result[j] = nums[i]
//                     break
//                 }
//             }
//         }
//     }
//     return count;
// };
// @lc code=end

