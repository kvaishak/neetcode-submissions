class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // s= s.split(' ').join('').replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        // let left = 0;
        // let right = s.length-1;

        // while(left <= right ){
        //     if(s[left] != s[right]){
        //         return false
        //     }
        //     left++;
        //     right--;
        // }
        // return true;

        let left=0;
        let right = s.length-1;

        // if(left == right) return true

        while(left <= right){
            while(!/[a-zA-Z0-9]$/.test(s[left])){
                left++
            }
            while(!/[a-zA-Z0-9]$/.test(s[right])){
                right--
            }
            if(right < 0){
                return true;
            }
            if(s[left].toLowerCase() != s[right].toLowerCase()){
                return false;
            }
            left++;
            right--;
        }
        return true
    }
}
