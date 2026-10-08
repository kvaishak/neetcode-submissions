class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let left = 0;
        let right = 1;

        while(right < prices.length){
            const sub = prices[right] - prices[left]
            if(sub > maxProfit){
                maxProfit = sub
            }if (prices[right] < prices[left]){
                left = right;
            }
            right++
        }

        return maxProfit
    }
}
