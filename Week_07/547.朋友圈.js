/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */
// union-find
var findCircleNum = function (M) {
    const parent = []
    for (let i = 0; i < M.length; i++) {
        for (let j = 0; j < M.length; j++) {
            if (M[i][j] === 1 && i !== j) {
                union(i, j)
            }
        }

    }
    let count = 0
    for (let i = 0; i < M.length; i++) {
        if (!parent[i]) {
            count++
        }
    }
    return count
    function find(i) {
        if (!parent[i]) {
            return i
        }
        return find(parent[i])
    }

    function union(x, y) {
        let xset = find(x)
        let yset = find(y)
        if (xset !== yset) {
            parent[xset] = yset
        }
    }

};
// bfs
// var findCircleNum = function (M) {
//     let visited = []
//     let count = 0
//     let queue = []
//     for (let i = 0; i < M.length; i++) {
//         if (!visited[i]) {
//             queue.push(i)
//             while (queue.length) {
//                 let s = queue.shift()
//                 visited[s] = 1
//                 for (let j = 0; j < M.length; j++) {
//                     if (M[s][j] == 1 && !visited[j]) {
//                         queue.push(j)
//                     }
//                 }
//             }
//             count++
//         }
//     }
//     return count
// };
// dfs
// var findCircleNum = function (M) {
//     let visited = []
//     let n = M.length
//     let count = 0
//     for (let i = 0; i < n; i++) {
//         if (!visited[i]) {
//             dfs(i)
//             count++
//         }
//     }
//     function dfs(i) {
//         for (let j = 0; j < M[i].length; j++) {
//             if (!visited[j] && M[i][j] === 1) {
//                 visited[j] = 1
//                 dfs(j)
//             }
//         }
//     }
//     return count
// };
// @lc code=end

