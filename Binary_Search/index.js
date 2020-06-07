var binarySearch = function (nums, target) {
    let start = 0;
    let end = nums.length - 1

    while (start <= end) {
        let middle = Math.floor((start + end) / 2)
        let currentNumber = nums[middle]
        if (currentNumber > target) end = middle - 1
        if (currentNumber < target) start = middle + 1
        if (currentNumber === target) return middle
    }
    return -1
};

module.exports = binarySearch
