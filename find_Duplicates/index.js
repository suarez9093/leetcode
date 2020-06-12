var findDuplicates = function (nums) {
    let obj = {};
    let result = [];

    for (let i = 0; i < nums.length; i++) {
        obj[nums[i]] = (obj[nums[i]] || 0) + 1
    }

    for (let key in obj) {
        if (obj[key] > 1) result.push(parseInt(key))
    }
    return result;
};
