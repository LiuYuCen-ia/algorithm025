var lengthOfLIS = function(nums) {
    let res = 1;// 用来计算长度的 上升长度
    let len = nums.length;
    let dp = [];
    dp[res] = nums[0]
    if(len == 0) return 0;
    for(let i = 1; i < len; i++) {
        if(nums[i] > dp[res]) {
            dp[++res] = nums[i]
        } else {
            let l = 1,r = len , pos = 0;
            while(l <= r) {
                let mid = (l+r) >> 1;
                if(dp[mid] < nums[i]) {
                    pos = mid;
                    l = mid + 1
                }else {
                    r = mid - 1;
                }
            }
        }
        dp[pos + 1] = nums[i]

    }
    return res;
}