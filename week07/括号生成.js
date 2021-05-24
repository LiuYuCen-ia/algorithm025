var generateParenthesis = function(n) {
    let res = [];
    function _generate (left,right,n,str) {
        //递归终结条件
        if(left == n && right == n) {
            res.push(str)
            return
        }
        //当前逻辑层
        if(left < n) {
            //下探到 下层
            _generate(left+1,right,n,str+"(")
        }
        if(left > right) {
            _generate(left,right+1,n,str+")")
        }
    }
    _generate(0,0,n,"")
    return res;
}
console.log(generateParenthesis(3))