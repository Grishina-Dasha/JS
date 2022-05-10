//1. Написать скриптик, который сосчитает и выведет результат от возведения 2 в степень 10, начиная со степени 1

let pow = 1
while (pow<=10){
    console.log("Возведение 2 в степень\t"+pow+"\t="+2**pow)
    pow++;
}

// 1*. Преобразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2
function pow(pow){
    console.log("Возведение 2 в степень\t"+pow+"\t="+2**pow)
}

pow(7)
pow(2)

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, чтобы в первой строчке выводилось :), во второй :):) и так далее
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let str =":)"
for(i=0;i<=5;i++){
    console.log(str.repeat(i))
}

//2*. Преобразовать 2 задачу в функцию, принимающую на вход строку, которая и будет выводиться в консоль (как в условии смайлик), а также количество строк для вывода 
//e.g. function printSmile(stroka, numberOfRows)

function printSmile(str, numberOfRows){
    for(i=0;i<=numberOfRows;i++){
        console.log(str.repeat(i))
}}

printSmile(":(",3)
printSmile("a",10)

// 3**.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, сколько в слове гласных, и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'
// 

function getWordStructure(word){
let word1 = word.replace(/[^a-z\s]/gi, '');
let count = 0
const letters = ['a','e','i','o','u','y']
for (let a of word1.toLowerCase()){
    if(letters.includes(a)){
        count++
    }
}
console.log("Слово\t"+ word1 +"\tсостоит из\t" + count +"\tгласных и\t"+(word1.length-count)+ "\tсогласных букв")
}

getWordStructure('case')
getWordStructure('Case')
getWordStructure("Check-list")


// 4**. Написать функцию, которая проверяет, является ли слово палиндромом e.g. function isPalindrom(word)
// Проверки: 'abba', 'Abba'
function isPalindrom(word){
    word=word.toLowerCase()
    for(i=0;i<(word.length/2);i++){
        if(word[i]!=word[word.length-i-1]){
           return false
        }
    }
    return true
}

if (isPalindrom('mama')){
    console.log("Word is polindrom")
}
else{
    console.log("Word is not polindrom")
}