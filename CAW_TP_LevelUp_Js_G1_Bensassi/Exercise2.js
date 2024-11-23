//1
const arr = [3, 5, 8];
const plus_one = arr.map(n => n + 1);
console.log(plus_one); 
//2
const double = arr => arr.map(val => val * 2);
console.log(double(arr)); 
//3
const obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
const { a, b } = obj.numbers;
console.log(a, b); 
//4
const add = (a = 10, b = 10) => {
    a = a === 0 ? 0 : a;
    b = b === 0 ? 0 : b;
    return a + b;
};
console.log(add(0, 0));
console.log(add(2, 3));   
console.log(add(1, 0));
console.log(add(2));  
console.log(add());      