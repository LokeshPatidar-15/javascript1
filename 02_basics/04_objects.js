const tinderuser ={}

tinderuser.name ="sanji"
tinderuser.id = "sanji123"
tinderuser.age = 28
tinderuser.loogedin = false

console.log(tinderuser);

// merging two objects

obj1 = {
    1: 'a',
    2: 'b'
}
obj2 = {
    3: 'c',
    4: 'd'
}

const obj3 =   Object.assign({},obj1 , obj2)
console.log(typeof(obj3));


obj4 = { ...obj1, ...obj2}
console.log(typeof(obj4));

const cousre ={
    couresename: "js courese",
    price :"$999",
    cousreinstructor: "Love "
}

const {cousreinstructor} = cousre  
console.log(cousreinstructor);

