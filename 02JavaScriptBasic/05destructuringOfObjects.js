
// object De Structuring 
const about = {

    name: "Ankit ",
    age : 22,
    email : "Ankit@gail.com"
}

// we are extracting the values from the  about object  
const { name } = about

console.log(name);

// we can Also change the name 
const { age:a } = about

console.log(a);