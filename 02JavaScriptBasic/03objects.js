// we can create object in two ways

// 1 Object Literals 

const User = {
    name: "Ankit", // name is key and age is value 
    age :22,
    isLogin :true
}

// we can access object in two ways 
console.log(User.age);
console.log(User["age"]);

// if we want to access symbol 

const mySym = Symbol("ankit")

const User1 = {
    name: "Ankit", // name is key and age is value 
    [mySym] : "AnkitP",
    age :22,
    isLogin :true
}

console.log(User1[mySym]);
console.log(typeof User1[mySym]);