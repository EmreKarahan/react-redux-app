/*
function fn(param1, param2) {
    console.log(param1);
    console.log(param2);
}

fn(1,2);
*/

// const fn = (param1, param2) => {
//     console.log(param1);
//     console.log(param2);
// }
// fn(1,2);

// const add = (param1, param2) => param1 + param2;
//const pow = param1 => param1 ** 2;

// const fn = () => {
//     return {
//         key1 : "value1",
//         key2: "value2"
//     }
// }

const fn = (param1 = 'value', ...rest) => ({
  key1: param1,
  key2: 'value2',
  rest,
});

const result = fn('value', 'value3', 'value4', 'value5', 'value6');
console.log(JSON.stringify(result, null, 2));

//console.log(pow(4));
