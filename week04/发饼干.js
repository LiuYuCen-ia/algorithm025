// var findContentChildren = function(g,s){
//     g.sort((a,b)=>b - a); // 从大到小排序
//     s.sort((a,b)=>b - a);
//     console.log(g,s)
//     // 定义g 孩子的 长度 和 s 饼干的长度  res 记录  符合要求 的
//     let i = g.length - 1, j = s.length,res = 0;
//     while(j--){  // 最多的饼干 给胃口最大的孩子
//        if (g[i] <= s[j]){  // 当胃口最大的孩子 小于 或 等于  最多的饼干的时候
//         res++; // 计数器+1
//         if(i-- == 0){ // 判断是否是最后一项  如果是 就退出循环
//             break;
//         }
//        }
//     }
//     return res;
// }
// console.log(findContentChildren([1,2,3],[1,1]))

// 双指针解法
var findContentChildren = function(g,s){
    g.sort((a,b)=>b - a); // 从大到小排序
    s.sort((a,b)=>b - a);
    let L = 0,R = 0,res = 0;
    while(L < g.length && R < s.length){
        if(g[L] <= s[R]){
            res++;
            L++;R++;
        }
        if(g[L] > s[R]){
            L++
        }
    }
    return res;
}
console.log(findContentChildren([1,2,3],[1,1]))