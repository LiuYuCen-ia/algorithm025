var longesVaalidParentheses = function(s) {
    let max = 0;
    let len = s.length;
    let dp = new Array(len).fill(0)
    for(let i = 1; i < len; i++) {
        if(s[i] == ")") {
            if(s[i-1] == "(") {
                if(i - 2 >= 0) {
                    dp[i] = dp[i-2] + 2;
                }else {
                    dp[i] = 2
                }
            }else if(s[i-dp[i]-1] == "("){
                if(i - dp[i-1] - 2 >= 0) {
                    dp[i] = dp[i-1] + 2 + dp[i-dp[i-1] - 2]
                }else {
                    dp[i] = dp[i-1] + 2
                }
            }
        }
        max = Math.max(max,dp[i])
    }
    return max;
}