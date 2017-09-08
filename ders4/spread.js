const arr = [1,2,3,4,5,6];
//console.log(...arr);

const [key1, key2, ...rest] = arr;

console.log(rest); //array
console.log(...rest); //values, objects


