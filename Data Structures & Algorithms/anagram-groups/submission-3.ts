class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        let ans = new Map();
        for (let s of strs) {
            const key = s.split("").sort().join("");
            if (ans.has(key)) {
                ans.get(key).push(s);
            } else {
                ans.set(key, [s]);
            }
        }

        return Array.from(ans.values());
    }
}
