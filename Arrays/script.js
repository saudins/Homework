console.log("Connected!");

let arr = [1,2,3,4]; 
// Using foreach, print the elements of arr
arr.forEach(element => console.log(element));

// Using map, change arr to be [2,4,6,8]
const arrMap = arr.map(x => x*2);
console.log(arrMap);

// Using filter, return even numbers in arr
const filterResult = arr.filter(element => element%2 == 0);
console.log(filterResult);