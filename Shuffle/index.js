var shuffle = function (nums, n) {
    let pointerOne = 0;
    let array = [];

    while (n < nums.length) {
        array.push(nums[pointerOne]);
        array.push(nums[n]);
        pointerOne++;
        n++;
    }
    return array;
};