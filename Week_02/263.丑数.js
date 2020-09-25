/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    for (let v of [2, 3, 5]) {
        while(num && num % v === 0) {
            num = num / v
        }
    }
    return num === 1
};
// var isUgly = function (num) {
//     while (true) {
//         if (num < 1) return false
//         else if (num % 2 === 0) num = num / 2
//         else if (num % 3 === 0) num = num / 3
//         else if (num % 5 === 0) num = num / 5
//         else return num === 1
//     }
// };
// @lc code=end

