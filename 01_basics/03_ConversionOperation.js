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

// console.log(stringsomenumber);
// console.log(typeof stringsomenumber);


//************************Operations************************


let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(9/3);
// console.log(2%3);           **********************(?????)

let str1 = "hello"
let str2 = " Ahad"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2); ............ (if the string is in the beginning, then all the values after are treated as strings)
// console.log(1 + 2 + "2"); ............ (Not preferred to write like this)

// console.log( (3 + 4) * 5 % 3); .......... (use parenthesis)

// console.log(+true);   ............. (Not sensible to write code like this)
// console.log(+"");     .............  *same as line 65*

let num1, num2, num3         // ....... *same as line 65*

num1 = num2 = num3 = 2 + 2    // ....... *same as line 65*

let gameCounter = 100
++gameCounter;                    // Read increment documentation(++) in MDN
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion