/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let n1 = 1
    let n2 = 2
    for (let i = 1; i < n; i++) {
        [n1, n2] = [n2, n1 + n2]
    }
    return n1
};
// var climbStairs = function (n) {
//     let hash = [0, 1, 2]
//     function dfs(n) {
//         if (!hash[n]) hash[n] = dfs(n - 1) + dfs(n - 2)
//         return hash[n]
//     }
//     return dfs(n)
// };
// var climbStairs = function (n) {
//     if(n < 3) return n
//     return climbStairs(n - 1) + climbStairs(n - 2)
// };
// @lc code=end

