class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let tmp = new Map();
        for (let i = 0; i < nums.length; i++) {
            let c = target - nums[i];
            if (tmp.has(c)) {
                return [i, tmp.get(c)];
            }
            tmp.set(nums[i], i);
        }
    }
}
