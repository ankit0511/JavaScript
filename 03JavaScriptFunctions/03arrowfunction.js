const user = {
    name:"Ankit",
    age :20,
    website :"ankit.com",

    welcomeMsg: function(){
        console.log(`${this.name}, your welcome`);
        // this will give us an current object 
        console.log(this);
        
    }
}
user.welcomeMsg();

// this will give us an empty object 
console.log(this);

// this will only work in objects not in functions 

function abc(){
    let name = " Ankit"
    // this will give us output as undefined 
    console.log(this.name);
    
}
abc()


// ************* Arrow Functions ****

  const addTwo= (n1, n2)=>{
    return n1+n2
}

console.log(addTwo(1,2));
