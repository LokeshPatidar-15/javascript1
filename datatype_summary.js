//   1 pritive datatype

//  7 types string ,number , boolean , null, undefine , symbol = to make something unique , big int



// reference type or non primitives

//  array , objects , functions


const id = Symbol('123')
console.log(id);



// const id1 = Symbol('123')
// console.log(id1);
// console.log(id === id1 );



//+++++++++++++++++++++++++++++++++++

// stack(primitive) , heap(non-primitive)

let myname = "Luffy";
let anotherName = myname;
anotherName = "zoro";
console.log(myname);
console.log(anotherName);
console.log(anotherName ===myname);


