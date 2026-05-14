class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const isalnum = (str) => /^[a-z0-9]+$/i.test(str);
        let n = s.length;
        let r = s.length - 1;
        let l = 0;
        while (r > l) {
            if (!isalnum(s[r])) {
                r--;
                continue;
            }
            if (!isalnum(s[l])) {
                l++;
                continue;
            }
            if (s[r].toLowerCase() !== s[l].toLowerCase()) {
                return false;
            }
            r--;
            l++;
        }
        return true;
    }
}
