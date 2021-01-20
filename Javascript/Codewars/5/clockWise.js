function createSpiral(N) {
    let test = Array(N)
    for (let i =0 ;i < N ; i++ ){
      test[i] = Array(N)
    }
   if(N === 1){
     return [[1]]
   }
    else{
      return boucle(test)
    }
  }
  
  function boucle(array){
    let n = array.length;
       for(let i = 0 ; i < n -1   ; i++){
       console.log(i)
  
      array[0][i] = i + 1;
      array[i][n - 1 ] = n + i;
      array[n - 1][n - 1 - i] = 2*n - 1 + i;
        array[n - i - 1 ][0] = 3*n - 2 + i
    
    
    }
   return array
  }
  
  console.log(createSpiral(3).filter(x => x ===undefined))





  let N = 3
  let test = Array(N)
      for (let i =0 ;i < N ; i++ ){
        test[i] = Array(N)
      }
  
  
  
  function getCenter(n,array){
  
  let position;
  let number;
  
  if(n%2){
  position = [(n-1)-Math.floor((n-1)/2),(n-1)-Math.floor((n-1)/2)];
  number = n*n
  }
  else{
  position = [n-1 - Math.floor((n-1)/2), n-1 - Math.floor(n/2)];
  number = n*n
  }
  array[position[0]][position[0]] = number;
  
  return {position, number, array}
  }
  
  
  
  function droite({position, number, array}){
    console.log({position, number, array}, "droite");
    array[position[0]][position[1]+1] = number - 1 ;
    return {position:[position[0],position[1]-1], number: number -1, array}
  }
  
  function gauche({position,number,array}){
  console.log({position, number, array}, "gauche")
  array[position[0]][position[1]-1] = number - 1;
   return {position:[position[0],position[1]+1], number: number -1, array}
  }
  
  function haut({position,number,array}){
  console.log({position, number, array}, "haut");
  array[position[0] -1][position[1]] = number - 1;
  return {position:[position[0] -1,position[1]], number: number -1, array}
  }
  function bas({position,number,array}){
  console.log({position, number, array}, "haut");
  array[position[0] +1][position[1]] = number - 1;
  return {position:[position[0]+ 1,position[1]], number: number -1, array}
  
  }
  console.log(droite(getCenter(N, test)))










  let N = 3
  let test = Array(N)
      for (let i =0 ;i < N ; i++ ){
        test[i] = Array(N).fill(0)
      }
  
  
  
  function getCenter(n,array){
  
  let position;
  let number;
  
  if(n%2){
  position = [(n-1)-Math.floor((n-1)/2),(n-1)-Math.floor((n-1)/2)];
  number = n*n
  }
  else{
  position = [n-1 - Math.floor((n-1)/2), n-1 - Math.floor(n/2)];
  number = n*n
  }
  array[position[0]][position[0]] = number;
  
  return {position, number, array}
  }
  





  
  
  function droite({position, number, array}){
   console.log(position,number)
   if(array[position[0]][position[1]+1] === undefined){
   console.log("going up")
				haut({position, number, array})
  }
  else{
  console.log(1)
   array[position[0]][position[1]+1] = number - 1 ;
    droite({position:[position[0],position[1]-1], number: number -1, array})
    return {position:[position[0],position[1]-1], number: number -1, array}
   
  }   
 }
  

  function gauche({position,number,array}){
  if(array[position[0]][position[1]-1] === undefined){
   console.log("going down")
				bas({position, number, array})
  }
  else{
   console.log(1)
    
   array[position[0]][position[1]-1] = number - 1 ;
    gauche({position:[position[0],position[1]-1], number: number -1, array})
    return {position:[position[0],position[1]-1], number: number -1, array}
  
  }  
  
  }
  
  
  function haut({position,number,array}){
   if(array[position[0]-1][position[1]] === undefined){
   console.log("going left")
				gauche({position, number, array})
  }
  else{
  array[position[0] -1][position[1]] = number - 1;
   haut( {position:[position[0] -1,position[1]], number: number -1, array})
  return {position:[position[0] -1,position[1]], number: number -1, array}
 
  }
}
  function bas({position,number,array}){
  if( array[position[0] +1][position[1]] === undefined){
   console.log("going rigth")
   droite({position,number,array})
  }
  else{
  console.log({position, number, array}, "haut");
  array[position[0] +1][position[1]] = number - 1;
  bas({position:[position[0]+ 1,position[1]], number: number -1, array})
  return {position:[position[0]+ 1,position[1]], number: number -1, array}
  
  }
  }
  
  console.log(gauche(getCenter(N,test)))


  function createSpiral2(n) {
    if (!Number.isInteger(n)||n<1) return [];
    var rs=[...Array(n)].map(x=>[...Array(n)].map(x=>0));
    rs[0][0]=1;
    for (var i=2,xx=0,yy=0;i<=n*n;) {
      while (yy+1<n&&rs[xx][yy+1]==0) rs[xx][++yy]=i++;
      while (xx+1<n&&rs[xx+1][yy]==0) rs[++xx][yy]=i++;
      while (yy-1>-1&&rs[xx][yy-1]==0) rs[xx][--yy]=i++;
      while (xx-1>-1&&rs[xx-1][yy]==0) rs[--xx][yy]=i++;
    }
    return rs;
  }

  function createSpiral3(N) {
    if(N < 1 || !Number.isInteger(N)) return [];
    let result = Array.from(Array(N), a => Array.from(Array(N)));
    let matrix = result.map((row, rowIdx)=>row.map((col, colIdx)=>[rowIdx, colIdx]));
    let transpose = array => array[0].map((x,i) => array.map(x => x[i])).reverse();
    let counter = 0, cells = N+N;
    
    while(--cells) {
      matrix.splice(0, 1)[0].forEach(([row, col]) => result[row][col] = ++counter);
      matrix = matrix.length && transpose(matrix);
    }
    
    return result;
  }

  function createSpiral4(N) {
    if(!Number.isInteger(N) || N < 0) return [];
    let dir = i = j = 0; 
    let num = 1;
    const spiral = Array.from(Array(N), () => Array(N).fill(0));
    const max = N*N + 1;
    while(num < max) {
      let counter = 0;
      switch(dir) {
        case 0:
        while(counter < N) spiral[i][j++] = num++, counter++;
        j--, i++, dir++; N--;
        break;
        case 1:
        while(counter < N) spiral[i++][j] = num++, counter++;
        i--, j--, dir++;
        break;
        case 2:
        while(counter < N) spiral[i][j--] = num++, counter++;
        j++, i--, dir++; N--;
        break;
        case 3:
        while(counter < N) spiral[i--][j] = num++, counter++;
        i++, j++, dir = 0;
        break;
      }
    }
    return spiral;
  }


  const _ = require('underscore');
const DIRECTIONS = _.range(4);

const nextDir = (dir) => (dir + 1) % DIRECTIONS.length;

const nextXY = (dir, x, y) => {
  if(dir === 0) return [x+1, y]; // right
  if(dir === 1) return [x, y+1]; // down
  if(dir === 2) return [x-1, y]; // left
  if(dir === 3) return [x, y-1]; // up
}

const canMove = (board, dir, x, y) => {
  const [nx, ny] = nextXY(dir, x, y);
  return board[ny] && board[ny][nx] === 0;
}

const move = (board, dir = 0, x = 0, y = 0, val = 1) => {
  board[y][x] = val;
  if (!_.any(DIRECTIONS, (d) => canMove(board, d, x, y))) return;
  if(canMove(board, dir, x, y)) {
    [x, y] = nextXY(dir, x, y);
    val += 1;
  } else {
    dir = nextDir(dir);
  }
  move(board, dir, x, y, val);
}

const createSpiral = (n) => {
  if(!Number.isInteger(n) || n < 1) return [];
  const board = _.times(n, () => Array(n).fill(0));
  move(board);
  return board;
}