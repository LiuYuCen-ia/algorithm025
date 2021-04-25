// dfs 解法
// var numIslands = function(grid) {
//     let res = 0;
//     for(let i = 0; i < grid.length; i++){
//         for(let j = 0; j < grid[0].length; j++){
//             if(grid[i][j] == 1){
//                 res++
//                 dfs(grid,i,j)
//             }
//         }
//     }
//     return res;
// }
// console.log(numIslands(
//     [["1","1","1"],["0","1","0"],["1","1","1"]]
// ))

// function dfs(grid,i,j) {
//     grid[i][j] = 0; //将遇到的岛屿变为 水
//     if(grid[i + 1] && grid[i + 1][j] == 1){
//         dfs(grid,i+1,j)
//     }
//     if(grid[i - 1] && grid[i - 1][j] == 1){
//         dfs(grid,i-1,j)
//     }
//     if(grid[i][j + 1] && grid[i][j + 1] == 1){
//         dfs(grid,i,j+1)
//     }
//     if(grid[i][j - 1] && grid[i][j - 1] == 1){
//         dfs(grid,i,j - 1)
//     }
// }
// bfs 解法
var numIslands = function(grid) {
    let m = grid.length , n = grid[0].length,res = 0;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] == 1){
                res++;
                grid[i][j] = 0;
                let queue = [];
                queue.push([i,j])
                while(queue.length > 0){
                    let cur = queue.shift()
                    let x = cur[0],y = cur[1]; //将第一项拿出来 分别为 i 和 j
                    if(x + 1 < m && grid[x + 1][y]){
                        queue.push([x + 1,y])
                        grid[x+1][y] = 0
                    }
                    if(x - 1 >= 0 && grid[x - 1][y]){
                        queue.push([x - 1,y])
                        grid[x-1][y] = 0
                    }
                    if(y + 1 < n && grid[x][y+1]){
                        queue.push([x ,y + 1])
                        grid[x][y+1] = 0
                    }
                    if(y - 1 >=0 && grid[x][y - 1]){
                        queue.push([x ,y - 1])
                        grid[x][y-1] = 0
                    }
                }
            }
        }
    }
    return res;
}
console.log(numIslands(
    [["1","1","1"],["0","1","0"],["1","1","1"]]
))
