/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let curr = 0
    let i = 1
    let n = nums.length
    while (i < n) {
        if (nums[i] !== nums[curr]) {
            // 避免相邻复制，提升不是很大
            // if(curr + 1 === i) {
            //     curr++
            //     i++
            //     continue
            // }
            nums[++curr] = nums[i]
        }
        i++
    }
    return curr + 1
};

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])