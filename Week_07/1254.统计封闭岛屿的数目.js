/*
 * @lc app=leetcode.cn id=1254 lang=javascript
 *
 * [1254] 统计封闭岛屿的数目
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var closedIsland = function (grid) {
    const n = grid.length
    const m = grid[0].length
    let result = 0
    let isclose = true
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0) {
                isclose = true
                dfs(i, j)
                if (isclose) result++
            }
        }
    }
    return result
    function dfs(x, y) {
        if (x < 0 || x >= n || y < 0 || y >= m) {
            isclose = false
            return
        }
        if (grid[x][y] !== 0) return false
        grid[x][y] = 2
        for (let k = 0; k < 4; k++) {
            const tx = x + dx[k]
            const ty = y + dy[k]
            dfs(tx, ty)
        }
    }
};
// @lc code=end

