class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const f = Array.from({ length: nums.length + 1 }, () => []); // freq

        const c = new Map<number, number>(); // count map
        for (let n of nums) {
            if (c.has(n)) {
                c.set(n, c.get(n) + 1);
            } else {
                c.set(n, 1);
            }
        }

        for (const [num, count] of c) {
            f[count].push(num);
        }

        let ans = [];
        for (let i = f.length - 1; i > 0; i--) {
            for (const n of f[i]) {
                ans.push(n);
                if (ans.length === k) {
                    return ans;
                }
            }
        }
        return ans;
    }
}
