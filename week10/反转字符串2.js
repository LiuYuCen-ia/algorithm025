var reverseStr = function(s,k) {
    let res = s.split(''); // 切割字符串
    for(let i = 0 ; i < s.length; i += 2 * k) { // 遍历所有字符串 
        reverse(i,i+k-1,res)  // 进入递归
    }
    return res.join('')
    function reverse(l,r,str) {  // 交换函数
        if(r >= s.length) r = s.length - 1; // 函数终结
        let t ;  
        while(r > l) { // 要交换的位置
            t = str[l];   // 进行交换
            str[l] = str[r];
            str[r] = t;
            l++;
            r--;
        }
    }
}
console.log(reverseStr("abcdefg",2))