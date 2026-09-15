class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const tg = {}
        for(let i = 0; i < nums.length; i++){
            const rem = target - nums[i];
            if(rem in tg){
                return [tg[rem], i]
            } else {
                tg[nums[i]] = i
            }
        }
    }
}
