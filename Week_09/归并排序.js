/**
 * 
 * @param {Array} nums 
 */
function mergeSort(nums) {
    function merge(left, mid, midPlus, right) {
        let arr = []
        let index = 0
        let i = left, j = midPlus
        while (i <= mid && j <= right) {
            arr[index++] = nums[i] < nums[j] ? nums[i++] : nums[j++]
        }
        while (i <= mid) arr[index++] = nums[i++]
        while (j <= right) arr[index++] = nums[j++]
        for (let k = 0; k < index; k++) {
            nums[left + k] = arr[k]
        }
    }
    function recursive(left, right) {
        if (left >= right) return
        const mid = left + ((right - left) >> 1)
        recursive(left, mid)
        recursive(mid + 1, right)
        merge(left, mid, mid + 1, right)
    }
    recursive(0, nums.length - 1)
}
let arr = [10, 1, 3, 5, 6, 8, 2, 4, 7, 9]
mergeSort(arr)
console.log(arr)