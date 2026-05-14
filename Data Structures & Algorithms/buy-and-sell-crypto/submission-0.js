class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let pr = 1;
        let pl = 0;
        let res = 0;
        while (pr < prices.length) {
            if (pr === pl) {
                pr++;
                continue;
            }
            if (prices[pl] > prices[pr]) {
                pl++;
                continue;
            }
            res = Math.max(prices[pr] - prices[pl], res);
            pr ++
        }
        return res;
    }
}
