class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = []

        for(let i of s){
            switch (i) {
                case '}':
                    if (stack.pop() !== '{') return false;
                    break;
                case ']':
                    if (stack.pop() !== '[') return false;
                    break;
                case ')':
                    if (stack.pop() !== '(') return false;
                    break;
                default:
                    stack.push(i);
                }
        }
        if(stack.length != 0) return false
        return true;
    }
}
