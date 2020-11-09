/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    const n = grid.length
    const m = grid[0].length
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    let result = 0
    const queue = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === 1) {
                queue.push([i, j])
                let carry = 0
                while (queue.length) {
                    const [x, y] = queue.shift()
                    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] !== 1) {
                        continue
                    }
                    grid[x][y] = 2
                    carry++
                    for (let k = 0; k < 4; k++) {
                        const tx = x + dx[k]
                        const ty = y + dy[k]
                        queue.push([tx, ty])
                    }
                }
                result = Math.max(result, carry)
            }
        }
    }
    return result
};
// var maxAreaOfIsland = function (grid) {
//     const n = grid.length
//     const m = grid[0].length
//     const dx = [0, 1, 0, -1]
//     const dy = [1, 0, -1, 0]
//     let result = 0
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (grid[i][j] === 1) {
//                 result = Math.max(result, dfs(i, j))
//             }
//         }
//     }
//     return result
//     function dfs(x, y) {
//         if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] !== 1) {
//             return 0
//         }
//         grid[x][y] = 2
//         let carry = 1
//         for (let k = 0; k < 4; k++) {
//             const tx = x + dx[k]
//             const ty = y + dy[k]
//             carry += dfs(tx, ty)
//         }
//         return carry
//     }
// };
// @lc code=end

