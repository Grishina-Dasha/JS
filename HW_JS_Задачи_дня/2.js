// Строка должна начинаться с хэштега (#).
// Во всех словах первая буква должна быть заглавной.
// Если окончательный результат длиннее 140 символов, он должен вернуть false.
// Если ввод или результат представляет собой пустую строку, он должен вернуть false.

// Примеры:

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function heshtag(str){
    if(str==""){
        return false
    }
    else{
    str = str.replace(/\b\w/g, (str) => str.toUpperCase());
    str="#"+str
    str = str.replace(/\s/g, '');
    console.log(str)
    let lenght = str.length;
    if(lenght>140){
        return false
    }}
}
//str = "Hello there thanks for trying my Kata"
str = ""
//str ="    Hello     World   "   
if (heshtag(str)==false){
    console.log("Вы ввели пустую строку")
}