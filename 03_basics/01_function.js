function addTwoNumber(num1 ,num2){
    console.log(num1+num2 );
    // return (num1+num2);
    
}
addTwoNumber(5,6);
// console.log(addTwoNumber(5,6));

function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(100,200,300));

// objects in function

const user = {
    name: "Luffy",
    bountry : 5000000000

}

function handleObject (anyobject){
    console.log(`My name is ${anyobject.name} and my  bounty is ${anyobject.bountry}`);
    
}

handleObject(user);

// arrays in function

const myArrya =[100,200,300,400,500]
function ArryaFunction(getArray){
    return getArray[1]
}
console.log(ArryaFunction(myArrya));
