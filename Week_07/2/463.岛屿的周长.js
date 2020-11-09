/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
// var islandPerimeter = function (grid) {
//     let result = 0
//     const n = grid.length
//     const m = grid[0].length
//     const dx = [0, 1, 0, -1]
//     const dy = [1, 0, -1, 0]
//     const queue = []
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (grid[i][j] === 1) {
//                 queue.push([i, j])
//                 while (queue.length) {
//                     const [x, y] = queue.shift()
//                     if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
//                         result++
//                         continue
//                     }
//                     if (grid[x][y] === 2) continue
//                     grid[x][y] = 2
//                     for (let k = 0; k < 4; k++) {
//                         const tx = x + dx[k]
//                         const ty = y + dy[k]
//                         queue.push([tx, ty])
//                     }
//                 }
//             }
//         }
//     }
//     return result
// };
var islandPerimeter = function (grid) {
    let result = 0
    const n = grid.length
    const m = grid[0].length
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                result += dfs(i, j)
            }
        }
    }
    return result
    function dfs(x, y) {
        if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === 0) {
            return 1
        }
        if (grid[x][y] === 2) return 0
        grid[x][y] = 2
        let carry = 0
        for (let k = 0; k < 4; k++) {
            const tx = x + dx[k]
            const ty = y + dy[k]
            carry += dfs(tx, ty)
        }
        return carry
    }
};
// @lc code=end

