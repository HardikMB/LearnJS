// console.log("Learn Arrow Function here!");
//syntax
const showLearnMessage = () => {
    console.log("Learn Arrow Function here!");
}

const parameterizedFunction = (a,b) => {
return a+b;
}
//below arrow function only must have one line, return statement is optional
const parameterizedArrowFunctionSingleLine = (a,b) => a+b;
    
showLearnMessage()
console.log(parameterizedFunction(1,1));
console.log(parameterizedArrowFunctionSingleLine(2,2));

parameterizedArrowFunctionError(4,4)

const parameterizedArrowFunctionError = (a,b) => a+b;

//arguments - arguments keyword not available with arrow function, we can use spread operator


//hoisting - normal functions can be placed anywhere in js file but not arrow function else we will get Cannot access error

//this keyword has global scope in arrow function
//in normal functions , the this keyword will be local scope pertaining to local function