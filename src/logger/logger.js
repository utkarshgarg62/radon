
const a=function welcome(){
    console.log('Welcome to my application. I am Utkarsh Garg and a part of FunctionUp Radon cohort.')
}

module.exports.a = a

const arr=function(){
    const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
console.log(chunk(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'], 3));
}


const arrFunc1=function(){
    const _ = require('lodash');
let x = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
let newArray = _.tail(x);
console.log(newArray);
}


const arrFunc2=function(){
    const _ = require('lodash');
    console.log(_.union([2, 3, 5, 3, 2]));
}



const arrFunc3=function(){
    const _ = require('lodash');
let pairs = [
	['horror', 'The Shining'],
	['drama', 'Titanic'],
	['thriller', 'Shutter Island'],
    ['fantasy', 'Pans Labyrinth']
]
let obj = _.fromPairs(pairs);
console.log(obj)
}



module.exports.arr = arr
module.exports.arrFunc1=arrFunc1
module.exports.arrFunc2=arrFunc2
module.exports.arrFunc3=arrFunc3