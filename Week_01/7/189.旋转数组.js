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
        let prev = nums[curr]
        do {
            let next = (curr + k) % n
            let temp = nums[next]
            nums[next] = prev
            prev = temp
            curr = next
            count++
        } while (curr !== i);
    }
};
// @lc code=end

