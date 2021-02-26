/*
 * @lc app=leetcode.cn id=174 lang=javascript
 *
 * [174] 地下城游戏
 */

// @lc code=start
/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
    const n = dungeon.length
    const m = dungeon[0].length
    const memo = Array.from({ length: n }, () => Array(m).fill(-1))
    // console.log(memo);
    function dp(i, j) {
        if (i === n - 1 && j === m - 1) {
            // 到达终点时最少要有1
            return dungeon[i][j] >= 0 ? 1 : -dungeon[i][j] + 1
        }
        if (i === n || j === m) {// 超出范围
            return Number.MAX_VALUE
        }
        if (memo[i][j] !== -1) return memo[i][j]
        const res = Math.min(
            dp(i, j + 1),
            dp(i + 1, j)
        ) - dungeon[i][j]
        memo[i][j] = res <= 0 ? 1 : res
        return memo[i][j]
    }
    return dp(0, 0)
};
// @lc code=end

