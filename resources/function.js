function printHello(){
    console.log('Hello, I got printed from a function');
}

function addTwoNum(firstNum,secondNum){
    return firstNum+secondNum;
}

function multTwoNum(firstNum,secondNum){
    return firstNum*secondNum;
}

function addManyNumbersV1(){
    console.log("What is arguments: it is a JS object having all arguments passed to function irresepective of method signature");
    let sum=0;
for (let index = 0; index < arguments.length; index++) {
    const element = arguments[index];
    sum =sum+element;
}
return sum;
}

function addManyNumbersV2(...inputNumbers){
    console.log("The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.");
    let sum=0;
for (let index = 0; index < inputNumbers.length; index++) {
    const element = inputNumbers[index];
    sum =sum+element;
}
return sum;
}

printHello()
console.log("Sum:"+addTwoNum(3,4))
console.log("Sum:"+addTwoNum(3,'s')) // This will not do sum, it will concatenate
console.log("Sum:"+addTwoNum(3,"ss"))
console.log("Multiplication of Two Number:"+ multTwoNum(3,3));
console.log("Multiplication of Two Number:"+ multTwoNum('3',3));
console.log("Multiplication of Two Number:"+ multTwoNum('Unknown Number',3));// this would give NaN ie. Not a Number
console.log("Addition of Many number:"+addManyNumbersV1(1,2,3,4,5,6))
console.log("Addition of Many number:"+addManyNumbersV1(100,200,300))

console.log("Addition of Many number using:"+addManyNumbersV2(100,200,300))