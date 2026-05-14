class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let n = numbers.length;
        let r = n - 1;
        let l = 0;

        while (r > l) {
            let cur = numbers[r] + numbers[l];
            if (cur > target) {
                r--;
            }
            else if (cur < target) {
                l++;
            } else {
                return [l + 1, r + 1];
            }
        }
    }
}
