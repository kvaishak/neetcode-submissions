class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const clct = {}

        for(const st of strs){
            const ordr = st.split('').sort().join('');
            if(ordr in clct){
                clct[ordr].push(st)
            }else{
                clct[ordr] = [st]
            }
        }

        return Object.values(clct);
    }
}
