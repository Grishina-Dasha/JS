//Преобразовать задание 3* таким образом, чтобы возраст вводится используя функцию prompt в привязанной верстке
function check_age(age1){
    let age2 = 18
    let age3 = 60
    if (age1<age2 && age1>0){
        alert("You don’t have access cause your age is " + age1 + " it’s less then " + age2)
        } else if (age1 >= age2 && age1 < age3){
        alert("Welcome!")
        } else if (age1 >= age3){
        alert("Keep calm and look Culture channe")
        } else{
        alert("Technical work")
        }
}
function check_type(age1){
    if (typeof(age1)!="number" && isNaN(age1)==false)
    {
        let age1_1=Number(age1)
        check_age(age1_1)
    }
    else if (typeof(age1)=="number")
    {
        check_age(age1)
    }
    else{
        alert("Error")
}}


let age1 = prompt("Сколько вам лет?", '')
if (age1===""){
    alert("Вы ввели пустую строку")
}
else{
    check_type(age1)
}