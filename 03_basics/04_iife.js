
(function chai(){
    console.log(`DB connected`);
    
})(); // immidiate inwoke function


// iife in arrow function
( (name) => {
    console.log(`DB connected 2.0 , ${name}` );
    
})("Robin")
 