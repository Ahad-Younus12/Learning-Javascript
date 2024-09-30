//************************Conversion************************


let score = "33abc"

// console.log(typeof score);
// console.log(typeof (score))

let ValueInNumber = Number(score)

// console.log(typeof ValueInNumber);
// console.log(ValueInNumber);


// "33" => 33
// "33abc" => NaN "NotaNumber"  The value type is defined as number but its not
// true => 1; False =>0

let isLoggedIn = "1"

let booleanisloggedin = Boolean(isLoggedIn)

// console.log(booleanisloggedin);

// "Ahad" => True  (If there's any value, it's considered as true)
// "" => False   (If there's no value, it's considered as false)
// "1" => true ; "0" => false


let somenumber = 12

let stringsomenumber = String(somenumber)

console.log(stringsomenumber);
console.log(typeof stringsomenumber);