function findOdd(A) {
    //happy coding!
    const obj={}
    let number;
    for (let i=0; i<A.length; i++){
      
      obj[A[i]] = (obj[A[i]] || 0) + 1
    }
    for (const property in obj){
      if(obj[property]%2 === 1){
        number = parseInt(property)
      }
    }
    return number 
}


const findOdd2 = (xs) => xs.reduce((a, b) => a ^ b);
function findOdd4(A) {
    return A.reduce(function(c,v){return c^v;},0);
  }




  function findOdd5(arr) {
    var result, num = 0;
  
    arr = arr.sort();
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i+1]) {
        num++;
      } else {
        num++;
        if (num % 2 != 0) {
          result = arr[i];
          break;
        }
      }
    }
    return result;
  }