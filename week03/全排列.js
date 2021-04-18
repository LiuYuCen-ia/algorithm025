var permute = function(nums){
    var res = [] // 返回数组
    var hash = {} // 记录位置
    const dfs = (arr)=>{
        //递归结束条件
        if(arr.length === nums.length){
            res.push(arr.slice()) // 将数组的数浅拷贝份
            return ;
        }
        for(const num of nums){ // 遍历数组  枚举法
            if(hash[num]){continue}  // 如果存在跳出本次循环
            arr.push(num); // 如果不存在则进入数组
            hash[num] = true; // 在哈希表中进行标记
            dfs(arr); // 开始递归
            arr.pop()// 递归结束开始  回溯一层出栈一层
            hash[num] = false; // 解除标注
        }
    }
    dfs([])
    return res;
}
console.log(permute([1,2,3]))