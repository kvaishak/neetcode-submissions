class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        const trackObj = {}

        for(const char of s){
            trackObj[char] = char in trackObj ? trackObj[char]+1 : 1
        }
        console.log(trackObj)

        for(const char of t){
            if(char in trackObj && trackObj[char] != 0){
                trackObj[char] -= 1
                if(trackObj[char] == 0) delete trackObj[char]
            }else{
                return false
            }
        }
        if(Object.keys(trackObj).length != 0) return false

        return true
    }
}
