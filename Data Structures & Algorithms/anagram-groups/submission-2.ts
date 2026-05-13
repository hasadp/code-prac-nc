class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let ans = new Map();
        for (let i = 0; i < strs.length; i++) {
            const key = strs[i].split("").sort().join("");
            if (ans.has(key)) {
                ans.get(key).push(strs[i]);
            } else {
                ans.set(key, [strs[i]]);
            }
        }

        return Array.from(ans.values());
    }
}
