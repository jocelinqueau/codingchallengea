function dirReduc(arr){
    // ...
    for(let j=0; j<arr.length;j++){
         if(arr[j] === "NORTH" && arr[j+1] === "SOUTH" || arr[j] === "SOUTH" && arr[j+1] === "NORTH"){
           arr.splice(j,2);
           dirReduc(arr)
           
         }
         else if (arr[j] === "EAST" && arr[j+1] === "WEST" || arr[j] === "WEST" && arr[j+1] === "EAST" ){
           arr.splice(j,2)
            dirReduc(arr)
         }
       }
    return arr
  }
  
    