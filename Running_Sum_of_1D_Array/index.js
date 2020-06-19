var runningSum = function (nums) {
    let currentValue = 0;
    let result = [];
    let pointer = 0;

    while (pointer < nums.length) {
        currentValue += nums[pointer];
        result.push(currentValue);
        pointer++
    }
    return result
};