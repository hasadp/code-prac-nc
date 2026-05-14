class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let ns = new Set(nums);
        let longest = 0;
        let len;
        for (const n of ns) {
            if (ns.has(n - 1)) {
                continue;
            }
            len =1;
            while(ns.has(n+len)) {
                len++;
            }
            if (longest < len) {
                longest = len
            }
        }
        return longest;
    }
}
