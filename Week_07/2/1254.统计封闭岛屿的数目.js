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
    let isClose = false
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const queue = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 0) {
                isClose = true
                queue.push([i, j])
                while (queue.length) {
                    const [x, y] = queue.shift()
                    if (x < 0 || x >= n || y < 0 || y >= m) {
                        isClose = false
                        continue
                    }
                    if (grid[x][y] !== 0) continue
                    grid[x][y] = 2
                    for (let k = 0; k < 4; k++) {
                        const tx = x + dx[k]
                        const ty = y + dy[k]
                        queue.push([tx, ty])
                    }
                }
                if (isClose) result++
            }
        }
    }
    return result
};
// var closedIsland = function (grid) {
//     const n = grid.length
//     const m = grid[0].length
//     let result = 0
//     let isClose = false
//     const dx = [0, 1, 0, -1]
//     const dy = [1, 0, -1, 0]
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (grid[i][j] === 0) {
//                 isClose = true
//                 dfs(i, j)
//                 if (isClose) result++
//             }
//         }
//     }
//     return result
//     function dfs(x, y) {
//         if (x < 0 || x >= n || y < 0 || y >= m) {
//             isClose = false
//             return false
//         }
//         if (grid[x][y] !== 0) return false
//         grid[x][y] = 2
//         for (let k = 0; k < 4; k++) {
//             const tx = x + dx[k]
//             const ty = y + dy[k]
//             dfs(tx, ty)
//         }
//     }
// };
// @lc code=end

