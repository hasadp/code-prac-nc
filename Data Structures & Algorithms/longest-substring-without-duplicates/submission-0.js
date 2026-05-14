class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        if (s.length === 0) {
            return 0;
        }
        if (s.length === 1) {
            return 1;
        }
        let set = new Set();
        let l = 0;
        let r = 1;
        let res = 1;
        set.add(s[l]);
        while (r < s.length) {
            if (r === l) {
                r++;
                continue;
            }
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
