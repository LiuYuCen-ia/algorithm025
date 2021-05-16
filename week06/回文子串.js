var  countSubstrings = function(s) {
    let res = 0;// 用来记录次数
    let len = s.length; // 长度
    let dp = new Array(len)// 创建一个长度相同的数组
    for (let j = 0; j < len; j++){
        for(let i = 0; i <= j; i++){
            if(s[i] == s[j] && (j - i <= 1 || dp[i+1])){
                dp[i] = true;
                res++
            }else{
                 dp[i] = false;
            }
        }
    }
    return res
}
console.log(countSubstrings('abc'))