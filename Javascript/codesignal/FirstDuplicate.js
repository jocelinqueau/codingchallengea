function firstDuplicate(a) {
    for(let i = 1; i < a.length ; i++){
        for(let j= 0; j < i ; j++){
            if(a[j] === a[i]){
                return a[i]
            }
        }
    }
    return -1 
}
// make a directory and while dict[num] != 2 keep going

function firstDuplicate(a) {
    let dict = {}
    for(let i = 0; i < a.length ; i++){
        if(dict[a[i]] == null ){
            dict[a[i]] = 1
        }
        else{
            dict[a[i]]++
        }
        if(dict[a[i]] == 2){
            return a[i]
        }
    }
    return -1 
}