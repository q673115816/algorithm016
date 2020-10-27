/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

var rob = function (nums) {
    let prev = 0
    let next = 0
    // let temp = 0
    for (let i = nums.length - 1; i >= 0; i--) {
        [prev, next] = [Math.max(nums[i] + next, prev), prev]
        // temp = prev
        // prev = Math.max(nums[i] + next, prev)
        // next = temp
    }
    return prev
};
// var rob = function (nums) {
//     if(nums.length === 0) return 0
//     if(nums.length === 1) return nums[0]
//     let first = nums[0]
//     let second = Math.max(nums[0], nums[1])
//     for (let i = 2; i < nums.length; i++) {
//         [first, second] = [second, Math.max(second, first + nums[i])]
//     }
//     return second
// };
// var rob = function (nums) {
//     let memo = []
//     return dp()
//     function dp(index = 0) {
//         if (index >= nums.length) {
//             return 0
//         }
//         if (memo[index]) return memo[index]
//         let result =
//             Math.max(dp(index + 1), nums[index] + dp(index + 2))
//         memo[index] = result
//         return result
//     }
// };
// var rob = function (nums) {
//     return dp()
//     function dp(index = 0) {
//         if (index >= nums.length) {
//             return 0
//         }
//         let result = 0
//         result = Math.max(dp(index + 1), nums[index] + dp(index + 2))
//         return result
//     }
// };
// var rob = function (nums) {
//     if(nums.length === 0) return 0
//     let n = nums.length
//     if(n === 1) return nums[0]

//     let dp = []
//     dp[0] = nums[0]
//     dp[1] = Math.max(nums[0], nums[1])
//     for (let i = 2; i < n; i++) {
//         dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
//     }
//     return dp[n - 1]
// };
// @lc code=end

