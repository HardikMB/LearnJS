//High Order Function -

/*

    The High Order Function is 
    Basically, a function which takes another function 
    as an argument or returns a function is 
    known as a higher order function.

*/

//Callback
/* 

    Callback is a high order function,
    which is run when a long running task is completed.

 */

//function returning function = High Order Function
//function passed as argument = High Order Function
//High Order Function = First Class Citizen

function filterFunction(arr, callback) {
  const filteredArray = [];
  for (let index = 0; index < arr.length; index++) {
    callback(arr[index]) ? filteredArray.push(arr[index]) : null;
  }
  return filteredArray; 
}

const myRawArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Example of function passing as parameter
console.log(
  filterFunction(myRawArray, (elementNum) => {
    return elementNum % 2 == 0;
  })
);

console.log(
    filterFunction(myRawArray, (elementNum) => {
      return elementNum % 2 != 0;
    })
  );
   
 
console.log(
    filterFunction(myRawArray, (elementNum) => {
      return elementNum > 5;
    })
  );
   
 