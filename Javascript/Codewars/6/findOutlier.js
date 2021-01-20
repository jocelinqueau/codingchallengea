function findOutlier(integers){
    //your code here
    
   const isImpair = integers.filter(integer => Math.abs(integer)%2 === 1 )
  
    if(isImpair.length != 1){
     
      return integers.filter(integer =>( Math.abs(integer)%2) === 0 )[0]
    }
    else{
   
       return integers.filter(integer =>( Math.abs(integer)%2) === 1 )[0]
    }
  }

  function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
  }

  // find method could have been used too 