var maxProduct = function (nums) {
    let pointerOne = 0;
    let pointerTwo = pointerOne + 1;
    let result = 0;
    while (pointerOne <= nums.length - 2) {
        if ((nums[pointerOne] - 1) * (nums[pointerTwo] - 1) > result) {
            result = (nums[pointerOne] - 1) * (nums[pointerTwo] - 1)
        }
        pointerTwo++
        if (pointerTwo === nums.length) {
            pointerOne++
            pointerTwo = pointerOne + 1
        }
    }
    return result
}
module.exports = maxProduct