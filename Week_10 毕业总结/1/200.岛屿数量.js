/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const n = grid.length
    if (n === 0) return 0
    const m = grid[0].length
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const queue = []
    let result = 0
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                result++
                queue.push([i, j])
                while (queue.length) {
                    const [x, y] = queue.shift();
                    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] !== '1') {
                        continue
                    }
                    grid[x][y] = '2'
                    for (let k = 0; k < 4; k++) {
                        const tx = x + dx[k]
                        const ty = y + dy[k]
                        queue.push([tx, ty])
                    }
                }
            }
        }
    }
    return result
};
// var numIslands = function (grid) {
//     const n = grid.length
//     if (n === 0) return 0
//     const m = grid[0].length
//     const dx = [0, 1, 0, -1]
//     const dy = [1, 0, -1, 0]
//     let result = 0
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (grid[i][j] === '1') {
//                 result++
//                 dfs(i, j)
//             }
//         }
//     }
//     return result
//     function dfs(x, y) {
//         if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] !== '1') {
//             return
//         }
//         grid[x][y] = '2'
//         for (let k = 0; k < 4; k++) {
//             const tx = x + dx[k]
//             const ty = y + dy[k]
//             dfs(tx, ty)
//         }
//     }
// };
// @lc code=end

