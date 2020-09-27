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
// var climbStairs = function (n) {
//     let hash = [0, 1, 2]
//     function dfs(n) {
//         if(hash[n]) return hash[n]
//         hash[n] = dfs(n - 1) + dfs(n - 2)
//         return hash[n]
//     }

//     return dfs(n)
// };
var climbStairs = function (n) {
    let prev = 1
    let curr = 2
    if (n < 2) return prev
    for (let i = 3; i <= n; i++) {
        let temp = curr
        curr = prev + curr
        prev = temp
    }

    return curr
};
// @lc code=end

