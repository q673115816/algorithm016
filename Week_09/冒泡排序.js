/**
 * 
 * @param {number[]} nums 
 */
function sort(nums) {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j + 1], nums[j]] = [nums[j], nums[j + 1]]
            }
        }
    }
    return nums
}

console.log(sort([1, 3, 5, 7, 9, 2, 4, 6, 8]))