const twoSum = (target, nums) => {
    let prevNums = {}
    for (let i=0; i < nums.length; i++) {
        if (prevNums[target - nums[i]] !== undefined) {
            return [prevNums[target - nums[i]], i]
        }
        prevNums[nums[i]] = i;
    }
};

// console.log(twoSum(9, [11, 15, 2, 7]));

