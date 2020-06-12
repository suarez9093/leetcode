var findDuplicates = function (nums) {
    let result = [];
    let pointerOne = 0;
    let pointerTwo = pointerOne + 1;

    while (pointerOne <= nums.length - 2) {
        if (nums[pointerOne] === nums[pointerTwo]) result.push(nums[pointerTwo]);
        pointerTwo++
        if (pointerTwo === nums.length) {
            pointerOne++
            pointerTwo = pointerOne + 1
        }
    }
    return result.sort((a, b) => a - b)
};