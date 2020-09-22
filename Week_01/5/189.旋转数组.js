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
    if (nums.length === 0) return []
    let n = nums.length
    k = k % n
    let count = 0
    let curr
    let prev
    let next
    let temp
    for (let i = 0; count < n; i++) {
        curr = i
        prev = nums[i]
        do {
            next = (curr + k) % n
            temp = nums[next]
            nums[next] = prev
            curr = next
            prev = temp
            count++
        } while (curr !== i);
    }
};
// @lc code=end

