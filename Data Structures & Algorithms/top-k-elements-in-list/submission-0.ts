class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const c = new Map<number, number>(); // count map
        for (let n of nums) {
            if (c.has(n)) {
                c.set(n, c.get(n) + 1);
            } else {
                c.set(n, 1);
            }
        }
        let buf = [...c.entries()].sort((a, b) => b[1] - a[1]);
        let ans = []
        for (let i = 0; i <k;i++){
            ans.push(buf[i][0])
        }
        return ans;
    }
}
