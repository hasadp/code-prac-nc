class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let r = heights.length - 1;
        let l = 0;
        let cur = 0;
        while (r > l) {
            cur = Math.min(heights[r], heights[l]) * (r - l);
            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
            max = Math.max(cur,max)
        }
        return max;
    }
}
