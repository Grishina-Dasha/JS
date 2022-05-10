// 1*:
// Преобразовать написанный код в 26-33 пунктах в функцию, принимающую на вход возраст.
// Пример: const checkAge = function(age) {
// Ваши преобразования
// }
// Вывести в консоль результат работы функции с возрастами 17, 18, 61

function check_age(age1){
    let age2 = 18
    let age3 = 60
        if (age1<age2 && age1>0){
        console.log("You don’t have access cause your age is " + age1 + " it’s less then " + age2)
        } else if (age1 >= age2 && age1 < age3){
        console.log("Welcome!")
        } else if (age1 >= age3){
        console.log("Keep calm and look Culture channe")
        } else{
        console.log("Technical work")
        }

}

check_age(17)
check_age(18)
check_age(61)