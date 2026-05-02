class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let first = strs[0];
        for (let i = 0; i < first.length; i++) {
            for (let j = 1; j < strs.length; j++) {
                if (i === strs[j].length || strs[j][i] !== first[i]) 
                return first.slice(0, i);
            }
        }
        return first;
    }
}
