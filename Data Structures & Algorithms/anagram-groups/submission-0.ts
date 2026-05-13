class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {

        let ans = {}
        for (let i= 0; i< strs.length; i++){
            const count = Array(26).fill(0)
            for (let j = 0; j<strs[i].length; j++){
                count[strs[i][j].charCodeAt(0) - 'a'.charCodeAt(0)] +=1
            }
            const key = count.join(',');
            if(!ans[key]){
                ans[key] = [];
            }
            ans[key].push(strs[i])
        }

        return Object.values(ans);

    }
}
