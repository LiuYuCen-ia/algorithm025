var lowest = function(root,q,p){
    let a ; //定义变量
    const dfs = function(){
        if(root == null) return false;  //递归终止条件
        const L = dfs(root.left,q,p); // 遍历左子树  一直遍历左子树
        const R = dfs(root.right,q,p); // 遍历右边子树 
        if((L && R) || ((root.val == p.val || root.val == q.val) && (L || R))){
            // 左右边节点同时存在 或者 root的值 == p的值 或者 root的值 == q的值 且 L 边 或者 R边存在
             a = root; // 返回祖先节点
        }
        return L || R || (root.val == p.val || root.val == q.val);
    }
    dfs(root,q,p);
    return a;
}
console.log(lowest())