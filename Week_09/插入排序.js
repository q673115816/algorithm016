/**
 * 
 * @param {Number[]} nums
 */
function insertSort(nums) {
    const n = nums.length
    for (let i = 0; i < n; i++) {
        let j = i
        while (j >= 0 && nums[j] > nums[i]) {
            [nums[j], nums[i]] = [nums[i], nums[j]]
            j--
        }
    }
    return nums
}

console.log(insertSort([1, 3, 5, 7, 9, 2, 4, 6, 8]))