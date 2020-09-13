/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

//  旋转
var rotate = function (nums, k) {
    let len = nums.length
    k = k % len
    let count = 0
    for (let start = 0; count < len; start++) {
        let curr = start
        let prev = nums[start]
        do {
            let next = (curr + k) % len
            let temp = nums[next]
            nums[next] = prev
            prev = temp
            curr = next
            count++
        } while (start != curr)
    }
}


//  暴力
// var rotate = function (nums, k) {
//     let len = nums.length
//     if (nums.length === 0) return 0
//     k = k % len
//     if (k === 0) return 0
//     let tmp
//     let prev
//     while (k > 0) {
//         prev = nums[len - 1]
//         for (let i = 0; i < len; i++) {
//             tmp = nums[i]
//             nums[i] = prev
//             prev = tmp
//         }
//         k--
//     }
// };

rotate([1, 2, 3, 4, 5, 6, 7], 3)