//1
let v1 = 10;
let v2 = 20;
[v1, v2] = [v2, v1];
console.log(v1); 
console.log(v2); 
//2
const numbers = [ 1, 2, 3 ];
const letters = [ "a", "b", "c" ]
const foods = ["mango", "pecan pie" ]
const array = [...numbers, ...letters, ...foods];
console.log(array);
//3
const word = "JavaScriptES6";
const charactersarray = [...word];
console.log(charactersarray);
//4
function fn(a,b,...args) {
    console.log('a:', a);
    console.log('b:', b);
    console.log('args:', args);
}
//a
fn(1,2,3,'A','B','C');
//b
fn(1,2) ;
//c
let x= ['a','b','c','d'] ;
fn(...x) ;    