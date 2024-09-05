// loop on object 

const obj = {
    name : "Ankit ",
    age: 22
}

for (const key in obj) {
   console.log(obj[key]);
   
}

for (const key in obj) {
    console.log(`${key} and containt in it is ${obj[key]}`);
    
 }