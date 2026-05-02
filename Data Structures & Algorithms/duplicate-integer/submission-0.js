class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
       let ns = new Set(nums);
       if (ns.size === nums.length){
        return false;
       }
       return true;
    }
}
