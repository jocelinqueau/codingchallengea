function FindIntersection(strArr) { 

    // code goes here  
    let firstString = strArr[0].split(",");
    let secondString = strArr[1].split(",");
    let resultArr = firstString.filter(item => secondString.includes(item))
    let resultArrStrip = resultArr.map(item => item.trim())
    return resultArrStrip.toString() ;
  
  }
     
  // keep this function call here 
  console.log(FindIntersection(readline()));


  //https://coderbyte.com/solution/Find%20Intersection

function FindIntersection2(strArr) { 

  var a = strArr[0].split(', ')
  var b = strArr[1].split(', ')
  var result = a.filter(x => b.find(a => a === x))
  return result.length > 0 ? result.join(',') : 'false'

}
   
// keep this function call here 
console.log(FindIntersection(readline()));

function FindIntersection(strArr) {
  
    const [a,b] = strArr.map(x => x.split(',').map(x => parseInt(x)));
    const s = new Set(b);
    
    return a.filter(x => s.has(x)).join(',') || 'false';
  }
  
  // keep this function call here 
  console.log(FindIntersection(readline()));


1

function FindIntersection(strArr) { 
  const firstNumbers = {};
  const matchedNumbers = [];
  
  strArr[0].split(', ').forEach((number) => {
    firstNumbers[number] = number;
  });
  
  strArr[1].split(', ').forEach((number) => {
    if (firstNumbers.hasOwnProperty(number)) {
      matchedNumbers.push(number);
    }
  });
  
  return matchedNumbers.length > 0 ? matchedNumbers.join(',') : false; 
}
   
// keep this function call here 
console.log(FindIntersection(readline()));