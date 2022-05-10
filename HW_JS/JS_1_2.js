// Преобразовать задание 1* таким образом, чтобы первым делом в функции проверялся тип данных. И если он не Number - кидалась ошибка.
function check_age(age1){
    let age2 = 18
    let age3 = 60
    if (typeof(age1)!="number")
    {
        console.log("Error")
    }
    else if (typeof(age1)=="number")
    {
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
    
}

check_age(13)
check_age('sdf')