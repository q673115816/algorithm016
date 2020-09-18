/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 双指针
var twoSum = function (nums, target) {
    let low = 0
    let n = nums.length
    let height = n - 1
    let sort = Array.from(nums).sort((a, b) => a - b)
    while (low < height) {
        mid = sort[low] + sort[height]
        if (mid === target) {
            return [nums.indexOf(sort[low]), nums.lastIndexOf(sort[height])]
        } else if (mid > target) {
            height--
        } else {
            low++
        }
    }
};
// hash
// var twoSum = function (nums, target) {
//     let map = new Map
//     let n = nums.length
//     for (let i = 0; i < n; i++) {
//         let f = target - nums[i]
//         if (map.has(f)) {
//             return [map.get(f), i]
//         }
//         map.set(nums[i], i)
//     }
// };
// @lc code=end

