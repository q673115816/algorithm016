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
// 一遍hash
var twoSum = function (nums, target) {
    let n = nums.length
    let map = new Map
    let hash
    for (let i = 0; i < n; i++) {
        hash = target - nums[i]
        if (map.has(hash) && map.get(hash) !== i) {
            return [i, map.get(hash)]
        }
        map.set(nums[i], i)
    }
};
// 两遍hash
// var twoSum = function (nums, target) {
//     let n = nums.length
//     let map = new Map
//     for (let i = 0; i < n; i++) {
//         map.set(nums[i], i)
//     }
//     for (let i = 0; i < n; i++) {
//         let f = target - nums[i]
//         if(map.has(f) && map.get(f) !== i) {
//             return [i, map.get(f)]
//         }
//     }
// };
// loop
// var twoSum = function (nums, target) {
//     let n = nums.length
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             if(nums[i] + nums[j] === target) {
//                 return [i, j]
//             }
//         }
//     }
// };
// @lc code=end

