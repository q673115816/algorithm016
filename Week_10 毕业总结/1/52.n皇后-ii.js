/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    let count = 0
    function dfs(row, col, pie, na) {
        if (row === n) {
            count++
            return
        }
        let bit = (~(col | pie | na)) & ((1 << n) - 1)
        while (bit) {
            const p = bit & - bit
            dfs(row + 1, col | p, (pie | p) << 1, (na | p) >> 1)
            bit &= (bit - 1)
        }
    }
    dfs(0, 0, 0, 0)
    return count
};
// var totalNQueens = function (n) {
//     let count = 0
//     const left = new Set
//     const mid = new Set
//     const right = new Set
//     function backtrack(row = 0) {
//         if (row === n) {
//             count++
//             return
//         }
//         for (let i = 0; i < n; i++) {
//             if(not(row, i)) continue
//             left.add(row - i)
//             mid.add(i)
//             right.add(row + i)
//             backtrack(row + 1)
//             left.delete(row - i)
//             mid.delete(i)
//             right.delete(row + i)
//         }
//     }

//     backtrack()

//     function not(row, i) {
//         if(left.has(row - i)) return true
//         if(mid.has(i)) return true
//         if(right.has(row + i)) return true
//     }
//     return count
// };
// @lc code=end

