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
    let result = 0
    let n = grid.length
    let m = grid[0].length
    let queue = []
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] === '1') {
                result++
                queue.push({ x: i, y: j })
                while (queue.length) {
                    const { x, y } = queue.shift()
                    if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === '0' || grid[x][y] === '2') {
                        continue
                    }
                    grid[x][y] = '2'
                    for (let k = 0; k < 4; k++) {
                        const tx = x + dx[k]
                        const ty = y + dy[k]
                        queue.push({ x: tx, y: ty })
                    }
                }
            }
        }
    }

    return result
};
// dfs
// var numIslands = function (grid) {
//     let result = 0
//     let n = grid.length
//     let m = grid[0].length
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < m; j++) {
//             if (grid[i][j] === '1') {
//                 result ++ 
//                 dfs(i, j)
//             }
//         }
//     }

//     function dfs(x, y) {
//         if (x < 0 || x >= n || y < 0 || y >= m || grid[x][y] === '0') {
//             return 0
//         }
//         if (grid[x][y] === '2') {
//             return 0
//         }
//         grid[x][y] = '2'
//         const dx = [0, 1, 0, -1]
//         const dy = [1, 0, -1, 0]
//         for (let k = 0; k < 4; k++) {
//             const tx = dx[k] + x
//             const ty = dy[k] + y
//             dfs(tx, ty)
//         }
//     }
//     return result
// };
// @lc code=end

