// immidiatly invoked function expression 


//  tp get rid of pollution from globel scope we use this functions 
(function chai(){
    console.log("hii form iife");
    
})();


( ()=>{
    console.log("hii from arrow ")
    
})();

// this function can also accept perameters 

( (n1  ,n2)=>{
    console.log(n1+n2);
    
})(1,2);