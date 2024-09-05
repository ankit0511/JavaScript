const arr = [1, 2, 3, 4, 5, 6]

const total = arr.reduce((acc,val)=>{
    return acc+val
},0)
console.log(total);


const totl = arr.reduce((acc,val)=>{

    console.log(`the value of acc is ${acc} and current value is ${val}`);
    
    return acc+val
},0)
console.log(totl);
