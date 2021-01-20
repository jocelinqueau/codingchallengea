function countTrue(arr) {
    const filteredArr = arr.filter(item => item == true)
   return filteredArr.length
}


const countTrue2 = r => r.filter(Boolean).length

function countTrue(arr){
	var count = 0;
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === true){
			count++;
		}
	}
	return count;
}