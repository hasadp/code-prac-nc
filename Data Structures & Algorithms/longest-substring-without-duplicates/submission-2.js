class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) {
            return 0;
        }
        let set = new Set();
        let l = 0;
        let r = 1;
        let res = 1;
        set.add(s[l]);
        while (r < s.length) {
            while (set.has(s[r])) {
                set.delete(s[l]);
                l++;
            }
            set.add(s[r]);
            res = Math.max(set.size, res);
            r++;
        }
        return res;
    }
}
