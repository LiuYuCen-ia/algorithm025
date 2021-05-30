var hammingWeight = function(n) {
    // let res = 0;
    // while(n) { // 当  n = 0 的 时候 结束
    //     //清零 最低位的 1
    //     n &= n - 1;
    //     res++
    // }
    // return res; 
    // 递归
    if(n == 0) return 0; // 递归终止条件
    return hammingWeight(n & (n - 1)) + 1; // 当前逻辑层 ，并下探到下一层
} 
