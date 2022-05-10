// 3**:
// Преобразовать 2* таким образом, чтобы значение '2' (строка в которой лежит ТОЛЬКО ЦИФРА) пропускалось, преобразовываясь в number
function check_type(age1){
    let age2 = 18
    let age3 = 60
    if (typeof(age1)!="number" && isNaN(age1)==false)
    {
        let age1_1=Number(age1)
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
    else{
        console.log("Error")
    }
}


check_type("122")
check_type("1s22")
check_type(18)