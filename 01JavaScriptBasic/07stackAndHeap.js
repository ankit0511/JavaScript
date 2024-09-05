/*
Premitive Datatypes uses Stack memory 
i.e they use pass by reference 

for example 
*/
let age = 22 
let newAge = age
console.log(newAge);


 newAge= 25

 console.log(newAge);
 console.log(age)

//  the optput will be 25 and 22 bcoz copies will provided 

/*
Non Premitive DataTypes 
They use Heap Memory 

i.e they use Pass By value 
*/

let user ={
    name:"Ankit",
    age : 22
}
// here i am getting ref.
let user1 = user; 

user1.age = 25;


// both the values will be same 
console.log(user.age);
console.log(user1.age);
