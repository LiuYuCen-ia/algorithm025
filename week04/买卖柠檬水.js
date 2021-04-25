var lemonadeChange = function(arr){
    let p5 = 0, p10 = 0;   // 用来记录   p5 和  p10
    for(let i of arr){  // 遍历数组的值
        if(i == 5){   // 如果有 5 快钱  p5 + 1
            p5 += 1;
        }else if(i == 10){  // 在判断 10 块的时候  
            if(p5 == 0){   // 如果没有 5块找  零钱  则 返回 false
                return false;
            }
            p5 -= 1;   // 如果有  5 块钱 - 1 换成 了  10 块钱
            p10 += 1; 
        }else if(i == 20){  // 如果是 20 的买柠檬水
            if(p5 > 0 && p10 > 0){   // 如果 有 10 和 5 块的优先 找 零 
                p5 -= 1;
                p10 -= 10
            }else if(p5 >= 3 && p10 == 0){  // 如果没有 10 块的 时候  只能 给 3张  5块
                p5 -= 3
            }else{ // 如果没有则返回 false
                 return false
            }
        }
    }
    //否则  返回  true
    return true;
}
console.log(lemonadeChange([5,5,5,10,20]))