class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = {}
        for(let i = 0; i < nums.length; i++){
            const cNum = nums[i];

            if(cNum in freq){
                freq[cNum] += 1;
            }else{
                freq[cNum] = 1;
            }
        }
        
        let result = new Array(nums.length + 1).fill('a')
        for(const key in freq){
            let count = freq[key]
            if(result[count] === 'a'){
                result[count] = [key]
            }else{
                result[count].push(key)
            }
        }

        const finalResult = [];
        for(let i = result.length - 1; i >= 0; i--){
            const s = result.pop();
            if(s != 'a'){
                finalResult.push(...s)
            }
            if(finalResult.length ==k){
                return finalResult
            }
        }
    }
}
