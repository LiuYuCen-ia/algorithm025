var isIsomorphic = function(s,t) {
    //  map 方法
    // let S = new Map() , T = new Map(),i=-1;
    // while(i++ < s.length) {
    //     const a = s[i] ,b = t[i];
    //     if(S.get(a) != T.get(b)) return false; // 如果set 
    //     S.set(a,i);
    //     T.set(b,i);
    // } 
    // return true; 
    //  indexOf 方法
    // for(let i = 0; i < s.length; i++) {
    //     if(s.indexOf(s[i]) !== t.indexOf(t[i])) {
    //         return false;
    //     }
    // }
    // return true;
    //哈希表
    let hash = {}, map = {};
    for(let i = 0; i < s.length; i++) {
        if(!hash[s[i]]) hash[s[i]] = t[i]; // {s[i]:t[i]}
        if(!map[t[i]]) map[t[i]] = s[i]; // {t[i]:s[i]}
        if(map[t[i]] != s[i] || hash[s[i]] != t[i]) return false;
    }
    return true;
}