var minPathSum = function (grid) {
  let len = grid.length,
    cur = grid[0].length;
  for (let i = 1; i < len; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  for (let j = 1; j < cur; j++) {
      grid[0][j] += grid[0][j - 1];
    //   console.log(j)
  }
  for(let i = 1; i < len; i++){
      for(let j = 1; j < cur; j++){
          grid[i][j] += Math.min(grid[i-1][j],grid[i][j-1])
      }
  }
  return grid[len-1][cur - 1]
};
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]))
