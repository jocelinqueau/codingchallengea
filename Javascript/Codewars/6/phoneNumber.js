// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example:

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!




// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function divide3(number){
    let new_list = [];
    
    for( i = 0; i < number.length; i+=3){
        new_list = number.slice(i,i+3)
        console.log(new_list)
    }
    return new_list
}


// console.log(divide3(numbers))

// //sometimes i can't extract the value

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// console.log(numbers[-0])
// function createPhoneNumber(numbers){
    
//     return `(${(numbers.slice(0,3)+"").replace(/,/gi,'')}) ${((numbers.slice(3,6)+"").replace(/,/gi,''))}-${((numbers.slice(6,numbers.length)+'').replace(/,/gi,''))}`
//  }

// console.log(createPhoneNumber(numbers))


// alternative solutions

// function createPhoneNumber(numbers){
//     numbers = numbers.join('');
//     return '(' + numbers.substring(0, 3) + ') ' 
//         + numbers.substring(3, 6) 
//         + '-' 
//         + numbers.substring(6);
//   }

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }

// console.log(numbers.join(''))