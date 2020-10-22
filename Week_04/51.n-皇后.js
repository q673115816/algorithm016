/*
 * @lc app=leetcode.cn id=51 lang=javascript
 *
 * [51] N 皇后
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = []
    let board = Array.from({ length: n }, () => [...'.'.repeat(n)])
    let left = new Set
    let right = new Set
    let colum = new Set
    backtrack(0)
    return result
    function backtrack(row) {
        if (row === n) {
            result.push(board.map((row) => row.join('')))
            return
        }
        for (let col = 0; col < n; col++) {
            if (isVaild(row, col)) {
                left.add(row + col)
                right.add(row - col)
                colum.add(col)
                board[row][col] = 'Q'
                backtrack(row + 1)
                board[row][col] = '.'
                left.delete(row + col)
                right.delete(row - col)
                colum.delete(col)
            }
        }
    }
    function isVaild(row, col) {
        if (left.has(row + col)) return
        if (right.has(row - col)) return
        if (colum.has(col)) return
        // for (let i = 0; i < n; i++) {
        //     if (board[i][col] === 'Q') {
        //         return false
        //     }
        // }
        // for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
        //     if (board[i][j] === 'Q') {
        //         return false
        //     }
        // }
        // for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        //     if (board[i][j] === 'Q') {
        //         return false
        //     }
        // }
        return true
    }
};
// @lc code=end

