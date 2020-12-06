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
    const left = new Set
    const mid = new Set
    const right = new Set
    const broad = Array.from({ length: n }, () => Array(n).fill('.'))
    const result = []
    function backtrack(row = 0) {
        if (row === n) {
            result.push(broad.map((item) => item.join('')))
            return
        }
        for (let i = 0; i < n; i++) {
            if(not(row, i)) continue
            left.add(row - i)
            mid.add(i)
            right.add(row + i)
            broad[row][i] = 'Q'
            backtrack(row + 1)
            broad[row][i] = '.'
            left.delete(row - i)
            mid.delete(i)
            right.delete(row + i)
        }
    }

    backtrack()
    return result
    function not(row, i) {
        if(left.has(row - i)) return true
        if(mid.has(i)) return true
        if(right.has(row + i)) return true
    }
};
// @lc code=end

