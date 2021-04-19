var qk = function(nums,k){
    let res = [],hash = {};
    for(let i of nums){
        // console.log(nums[i])
        if(hash[i]){
            hash[i]++
        }else{
            hash[i] = 1
        }
    }
    for(let j in hash){
      res.push([j,hash[j]])
    }
    res.sort((a,b)=>b[1] - a[1])
    res.length = k;
    
    return res.map(t => t[0]);
}
console.log(qk([1,1,1,2,2,3],2))