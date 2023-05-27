let firstNumber = 20
let secondNumber =23
console.log((firstNumber+secondNumber+(2*4)))
  
 
//Strings
const firstName = 'Hardik'
console.log(firstName)
const lastName = 'Bhangale'
console.log(lastName)

console.log('concatenated String vals:'+firstName  +' '+ lastName);

//Booleans

let trueBool = true;  // 1
let falseBool = false //0
console.log('false plus 1 :'+(falseBool+1));
console.log('true plus 1 :'+ (trueBool+1));
console.log('true plus 1 :'+ trueBool+1);


let lastLoginDate = null;
lastLoginDate = 10
lastLoginDate= 'Ten'
lastLoginDate

//NULL means some memory is allocated
//undefined means memory is unallocated, if you want to vanish , you can assign undefined later

//Objects

const person = {
fName : 'Hardik',
lName : 'Bhangale',
age:31,
lastLoginDate: null,
}
// person=null
console.log('Person Object looks like this:'+person) 
console.log('Concatenation of Object with String results like above line! Strange!');
console.log(person);
console.log(typeof(person));

let oneNumber = '22'

console.log(oneNumber+2); //here acts as concatenation
console.log(oneNumber*2);
console.log(oneNumber-2);
oneNumber='a'
console.log('Not a Number Error:'+oneNumber-2); //here it will give NaN - Not a Number



console.log(typeof(oneNumber));
console.log(typeof(trueBool));
console.log(typeof(trueBool+1));