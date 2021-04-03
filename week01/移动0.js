var yd0 = function(arr){
    let j = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] == 0){
            j++;
        }else if(j > 0){
            let s = arr[i];
            arr[i] = 0;
            arr[i-j] = s;
        }
    }
    return arr;
}
console.log(yd0([1,2,0,4,0,2]))