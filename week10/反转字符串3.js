var resreseWords = function(s) {
    // 自己按思路完成的
    // let str = "";
    // let arr = s.split(" "); // 将单词转化位数组
    // for(let i = 0; i < arr.length; i++) { // 遍历数组的每一项
    //     for(let j = arr[i].length - 1; j >= 0; j--) { // 尾遍历颠倒该单词的字符串
    //         str += arr[i][j]
    //     }
    //     if( i != arr.length - 1){
    //         str += " "
    //     } else {
    //         str += ""
    //     }
    // }
    // return str;
    //迭代
    let res = "", str = "";
    for(let i of s ) {
        if(i != " "){ // 不为空格的时候
            str = i + str; // s'teL
            
        }else { // 为空格的时候
            res += str + i; // 
            str = ""
        }
    }
    return res + str;
}
console.log(resreseWords("Let's take LeetCode contest"))