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
            if (prices[pl] < prices[pr]) {
                res = Math.max(prices[pr] - prices[pl], res);
            } else {
                pl = pr;
            }
            pr++;
        }
        return res;
    }
}
