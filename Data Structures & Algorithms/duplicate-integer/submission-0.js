class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // for(let i = 0; i < nums.length - 1; i++){
        //     const compareNum = nums[i];
        //     for(let j = i+1; j < nums.length; j++ ){
        //         if(nums[j] == compareNum){
        //             return true;
        //         }
        //     }
        // }
        // return false

        nums.sort((a,b)=> a - b);
        
        for(let i = 0; i < nums.length - 1; i++){
            if(nums[i] == nums[i+1]) return true
        }
        return false
    }
}
