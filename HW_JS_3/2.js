const fs = require('fs')
let persons = fs.readFileSync('task2.json')
let arr = JSON.parse(persons)
console.log(arr.length)
const newArray = Array.from(new Set(arr.map(el => JSON.stringify(el)))).map(el => JSON.parse(el));
let data = JSON.stringify(newArray,null,2); 
fs.writeFileSync('task2_result.json', data); 