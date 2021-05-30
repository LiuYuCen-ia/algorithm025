var reverseBits = function(n) {
    let res = 0;
    for(let i = 0 ; i < 32; i++){
        // 先往左移 一 位 ，最后一个位置 空出来
        res <<= 1; // 左移一位
        //res 加 上 n的最后一位数字
        res |= n & 1;
        // n 往右移 一位，把最后一位数字去掉
        n >> 1;
    }
    return res;
}