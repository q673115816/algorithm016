/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
// bfs
var letterCombinations = function (digits) {
    let n = digits.length
    if (n === 0) return []
    let dict = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }
    let queue = ['']

    for (let i = 0; i < n; i++) {
        let newQueue = []
        let letter = dict[digits[i]]
        for (let j = 0; j < letter.length; j++) {
            for (let k = 0; k < queue.length; k++) {
                newQueue.push(queue[k] + letter[j])
            }
        }
        queue = newQueue
    }
    return queue
};
// dfs
// var letterCombinations = function (digits) {
//     let n = digits.length
//     if (n === 0) return []
//     let dict = {
//         2: 'abc',
//         3: 'def',
//         4: 'ghi',
//         5: 'jkl',
//         6: 'mno',
//         7: 'pqrs',
//         8: 'tuv',
//         9: 'wxyz'
//     }
//     let result = []
//     dfs(0, '')

//     function dfs(index, str) {
//         if (n === index) {
//             result.push(str)
//         } else {
//             for (let char of dict[digits[index]]) {
//                 dfs(index + 1, str + char)
//             }
//         }
//     }
//     return result
// };
// @lc code=end

