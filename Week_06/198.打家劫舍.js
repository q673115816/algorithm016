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
    let n = nums.length
    let prev = 0
    let next = 0
    let res = 0

    for (let i = n - 1; i >= 0; i--) {
        res = Math.max(prev, nums[i] + next)
        next = prev
        prev = res
    }
    return res
};
// var rob = function (nums) {
//     let memo = []
//     return dp()

//     function dp(start = 0) {
//         if(start >= nums.length) {
//             return 0
//         }
//         if(memo[start]) return memo[start]
//         let res = Math.max(dp(start + 1), nums[start] + dp(start + 2))
//         memo[start] = res
//         return res
//     }
// };
// var rob = function(nums) {
//     return dp()

//     function dp(start = 0) {
//         if(start >= nums.length) {
//             return 0
//         }
//         let res = Math.max(dp(start + 1), nums[start] + dp(start + 2))
//         return res
//     }
// };
// @lc code=end

