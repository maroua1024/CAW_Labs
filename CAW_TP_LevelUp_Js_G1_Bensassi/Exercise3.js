//1
const setOne = arr => [...new Set(arr)];
console.log(setOne([4,5,5,2,2,4,3,1,5,2]));
//2
const getRidOf = (tab, ...val) => tab.filter(el => !val.includes(el));
console.log(getRidOf(['a','b','c','d','e','f','g'], 'b','e','x'));