var TowSum = function(arr,Sum){
    let obj = {};
    for(var i = 0;i<arr.length;i++){
        var s = Sum - arr[i];
        if(s in obj){ //如果有该属性  就 return
            return [obj[s],i];
        }
        obj[arr[i]] = i;// 将 数字的itme为对象的属性值(key)存入对象中，i 作为下标给 value 值存在
    }
}
console.log(TowSum([1,2,3,4,5,6],11))