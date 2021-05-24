var climbStairs = function (n,a = 1,b = 1) {
    // 迭代
    if(n > 0 && n < 3) return n;
    let n1 = 1,n2 = 2,sum = 0;
    for(let i = 3; i <= n; i++){
        sum = 0;
        sum = n1 + n2;
        n1 = n2;
        n2 = sum;
    }
    return n2;
    // 递归
    // function dfs (n,a = 0,b = 1){
    //     // 递归终结条件
    //     if(n < 1) return a;
    //     //当前逻辑层，  n-1下探到下一层
    //     return dfs(n-1,b,a+b)
    // }
    
    // return dfs(n+1);
    //尾递归
    // if(n == 1 || n == 0) return a;
    // return climbStairs(n-1,a+b,a)
}
console.log(climbStairs(3))