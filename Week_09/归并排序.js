/**
 * 
 * @param {Array} nums 
 */
function mergeSort(nums) {
    const left = 0
    const right = nums.length - 1
    function merge(l1, r1, l2, r2) {
        let arr = []
        let index = 0
        let i = l1, j = l2
        while(i <= r1 && j <= r2) {
            arr[index++] = nums[i] < nums[j]
        }
    }
    function recursive(left, right) {
        if (left >= right) return []
        const mid = left + (right - left) >> 1
        recursive(left, mid)
        recursive(mid + 1, right)
    
    }
}
