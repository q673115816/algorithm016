/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0
    let ten = 0
    for(let bill of bills) {
        if (bill === 5) {
            five++
        }
        if (bill === 10) {
            if (five === 0) return false
            five--
            ten++
        }
        
        if (bill === 20) {
            if (ten && five) {
                five--
                ten--
            } else if (five > 2) {
                five -= 3
            } else {
                return false
            }
        }
    }
    return true
};
// @lc code=end

