/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    let max = 0
    if (!matrix.length || !matrix[0].length) return max
    let n = matrix.length
    let m = matrix[0].length
    // let dp = JSON.parse(JSON.stringify(matrix))
    let dp = Array.from({ length: n }, () => [])
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (!i || !j || matrix[i][j] !== '1') {
                dp[i][j] = matrix[i][j] - 0;
            } else {
                dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1;
            }
            max = Math.max(max, dp[i][j]);
        }
    }
    return max * max
};
// loop
// var maximalSquare = function (matrix) {
//     let max = 0
//     if (!matrix.length || !matrix[0].length) return max
//     let n = matrix.length
//     let m = matrix[0].length
//     for (let i = 0; i < n - max; i++) {
//         for (let j = 0; j < m - max; j++) {
//             if (matrix[i][j] === '1') {
//                 while (rect(i, j, max + 1)) {
//                     max++
//                 }
//             }
//         }
//     }
//     return max * max

//     function rect(x, y, slide) {
//         if (x + slide > n || y + slide > m) return false
//         for (let i = x; i < x + slide; i++) {
//             for (let j = y; j < y + slide; j++) {
//                 if (matrix[i][j] !== '1') return false
//             }
//         }
//         return true
//     }
// };
// @lc code=end

