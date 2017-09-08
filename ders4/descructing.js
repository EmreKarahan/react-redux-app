const props = {
    prop1 : 'value1',
    prop2 : "value2",
    prop3 : "value3",
    prop4 : "value4",
    prop5 : "value5",
    prop6: {
        key1: "value6",
        key2: "value7"
    }
}



// const prop1 = props.prop1;
// const prop3 = props.prop3;


//const {prop1, prop3} = props;
//const {prop1, prop3, prop6 = 'value6'} = props;
//const {prop1, prop3, prop6: {key1}} = props;
//const {prop6: {key1}} = props;
const {prop6: {key1:var1}} = props;

// console.log(prop1);
// console.log(prop3);
//console.log(key1);
console.log(var1);

// const arr = [1,2,3];
// const [var1, var2, var3] = arr;
// console.log(var1, var2, var3);
