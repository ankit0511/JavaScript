// Premitive Datatypes 
/* there are 7 types of premitive datatypes 

premitives types are call by value 
1 String 
2 Number 
3 Boolean 
4 null 
5 undefined 
6 Symboll 
7 BigInt 
*/

/*

Reference type or not Premitive 

these all are call by reference
1 Array 
2 Objects 
3 Function 
*/

const id = Symbol("123")
const Aid = Symbol("123")

console.log(id === Aid);
// this will give us the value false because symbol make each value false 