class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let maxLen = 0;
        let left = 0;
        let right = 0;
        let mem = new Set();

        while (right < s.length){
            if(mem.has(s[right])){
                mem.delete(s[left]);
                left++;
            }else {
                mem.add(s[right]);
                maxLen = Math.max(maxLen, mem.size);
                right++;
            }
        }
        return maxLen;
    }
}
