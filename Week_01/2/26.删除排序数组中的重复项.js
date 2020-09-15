/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let n = nums.length;
    if(n < 2) return n
    let p = 0
    for (let i = 1; i < n; i++) {
        if (nums[p] !== nums[i]) {
            // 相邻不复制跳过
            // if(p + 1 === i) {
            //     p++
            //     continue
            // }
            nums[++p] = nums[i]
        }
    }
    return p + 1
};
// @lc code=end

