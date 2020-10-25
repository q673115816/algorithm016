/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let n = digits.length
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1
            return digits
        }
        digits[i] = 0
    }
    digits.unshift(1)
    return digits
};
// var plusOne = function (digits) {
//     let n = 1
//     let plus = 1
//     while (plus) {
//         let curr = digits.length - n
//         if (digits[curr] === 9) {
//             digits[curr] = 0
//             if (curr === 0) {
//                 digits.unshift(0)
//             }
//             n++
//         } else {
//             digits[curr] += 1
//             plus--
//         }
//     }
//     return digits
// };
// @lc code=end

