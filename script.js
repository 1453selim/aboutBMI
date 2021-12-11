let massMark = 80;
let massJohn = 75;
let heightMark = 1.80;
let heightJohn = 1.90;
var BMIMark = Math.floor(massMark /(heightMark*heightMark));
var BMIJohn = Math.floor(massJohn /(heightJohn*heightJohn));
console.log(BMIMark);
console.log(BMIJohn);
console.log("mark\'s BMI is" + "(" +BMIMark +")" + " bigger than john/\'s BMI  " + "(" + BMIJohn +")"  )
if(BMIMark > BMIJohn) {
    console.log("mark\'s BMI " +BMIMark + " higher john\'s BMI " +BMIJohn)
} else {
    console.log("mark\'s BMI " +BMIMark + " lover john\'s BMI " +BMIJohn)
}

var BMIMark = Math.round(massMark /(heightMark*heightMark));
var BMIJohn = Math.round(massJohn /(heightJohn*heightJohn));
console.log(BMIMark);
console.log(BMIJohn);
let markHigherBMI = BMIMark >BMIJohn;
console.log("mark\'s BMI higher than  john\'s BMI " +markHigherBMI)


