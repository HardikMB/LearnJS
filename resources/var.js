//variables can be defined using var, let and const
//var can be reassigned - GLOBAL
//let can be reassigned within block - LOCAL
//const has local scope and cannot be reassigned - LOCAL
//var and let can be assigned value later stage but not for const

var age=31;

console.log('My Age is:'+age)

console.log('JavaScript is not strongly types language.');
console.log('Hence I can assign String to same variable');

age='Thirty One';
console.log('My Age in words is:'+age)

console.log('The nomenclature to be followed is camelCase for variables plus it should not start with number')
//Naming Conventions
//firstName
//first_name
//FirstName
//firstName - THis is camel case Because N represents hump of a camel
//Invalid Naming Conventions will start giving erorr in js. Try uncommenting out below ones.

// var 1Var=1; //Should not start with number
// var var s =1; //should not ofcourse have space

//we Can create the variables using let keyword as well.

//Scope of var is global

boolVal= true;

console.log('Trying to check the value of localVarButGlobal:'+localVarButGlobal)
console.log('Trying to assign the value of localVarButGlobal')
localVarButGlobal = 'global scope'
console.log('Trying to check the value of localVarButGlobal:'+localVarButGlobal)

if(boolVal){
    var localVarButGlobal = 'lets check the scope'
}

console.log(localVarButGlobal)


//let age =11 if age is already defined it will give error while running the js file as caught SyntaxError: Identifier 'age' has already been declared (at var.js:43:5)



    if(boolVal){
        let newAge = 19
        console.log(newAge)
    }

    // console.log(newAge) //here it will give error since it is having the local scope


    const constAge = 19
    console.log("New Constant age is:"+constAge)
    // constAge=10  //uncomment this and you will get the r.js:57 Uncaught TypeError: Assignment to constant variable.
    //at var.js:57:13
    
    console.log(constAge);


    console.log('while initialization of const, you will have to assign a value and it cannot be undefined during birth')
    