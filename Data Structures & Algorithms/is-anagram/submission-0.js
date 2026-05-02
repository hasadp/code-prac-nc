class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let tmp = {};
        if (s.length !== t.length) return false;
        for (let i = 0; i < s.length; i++) {
            tmp[s[i]] = (tmp[s[i]] ?? 0) + 1;
            tmp[t[i]] = (tmp[t[i]] ?? 0) - 1;
        }
        return Object.values(tmp).every((val) => val === 0);
    }
}
