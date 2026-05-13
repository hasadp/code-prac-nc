class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let p = 1;
        let ioz = [];
        let res = [];
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] !== 0) {
                p *= nums[j];
            } else {
                ioz.push(j);
            }
        }
        if (ioz.length > 1) {
            res = Array(nums.length).fill(0);
        } else if (ioz.length === 1) {
            res = Array(nums.length).fill(0);
            res[ioz[0]] = p;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] !== 0) {
                    res[i] = p / nums[i];
                } else {
                    res[i] = p;
                }
            }
        }
        return res;
    }
}
