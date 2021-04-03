var  addOne = function(arr){
    for(let i = arr.length-1;i >= 0;i--){
        arr[i] += 1; //最后一项加 1
        arr[i] = arr[i] % 10  // 判断最后一项是否 == 10
        if(arr[i] != 0){ //最后一项不等于 0
            return arr; // 返回 +1 后的数字
        }
    }
    // console.log('9',[...arr])
    return [1,...arr] // 解析当前数组，并在当前数组的第一位给一个 1
}
console.log(addOne([9,9,9]))