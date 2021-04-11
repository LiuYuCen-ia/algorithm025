var nthUglyNumber = function(n){
    //定义一个数组
    let arr = new Array(n+1).fill(0)
    arr[1] = 1;
    let a2 = 1, a3 = 1, a5 = 1;
    //循环从第二项开始
    for(let i = 2; i <= n;i++){
        let num2 = arr[a2] * 2, num3 = arr[a3] * 3, num5 = arr[a5] * 5;
        arr[i]= Math.min(Math.min(num2,num3),num5)
        // console.log(arr[i])
        if(arr[i] == num2){
            a2++
        }
        if(arr[i] == num3){
            a3++
        }
        if(arr[i] == num5){
            a5++
        }
    }
    //最后一项是最大的
    return arr[n]
}
console.log(nthUglyNumber(10))