let arr1 = [1,2,3,4,5]
let arr2 = [6,7,8,9]
// arr1.push(arr2)
// we will get this output --> [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9 ] ]
console.log(arr1);
// and when we try to access the 5th index of the updated array 
// console.log(arr1[5]);
// we will get this output [ 6, 7, 8, 9 ]

//  now we will use concate 

let arr3 = arr1.concat(arr2)
console.log(arr3)
//  this will combine all the array in another different array 

// we can also use spread so er can 

const newArr = [...arr1,...arr2]
console.log(newArr);
