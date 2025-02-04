// singleton


// object literals 

//Object.create  constructor methord 

const mysim = Symbol("key1")
const jsuser = {
     name: "Lokesh",
     age: 18,
     mail: "xyz@gmial.com",
     location: "Indore ",
     [mysim] : "key1" 
}
console.log(jsuser[mysim]);

//overright in object
jsuser.age = 19
console.log(jsuser["age"]);


