// singalton Object 


// nesting Objects 
const User = {
    email:"A@gmail.com",
    fullname:{
       UserFullName:
        { FirstName:"Ankit",
        LastName :"patle"}
    }
}

const Obj1 ={1:"A"}
const Obj2 ={1:"A"}

const obj3 = Object.assign(Obj1,Obj2)


// here also we are going to use Object Spreading 

const obj4 = {...Obj1,...Obj2}
console.log(obj4);
