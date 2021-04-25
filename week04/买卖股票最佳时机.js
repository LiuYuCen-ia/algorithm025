var maxProfit = function(prices) { 
    let res = 0;
    for(let i = 0 ; i < prices.length ; i++){
        if(prices[i+1] > prices[i] ){
            res += prices[i+1] - prices[i]
        }
    }
    return res;
}
console.log(maxProfit([7,6,4,3,1]))