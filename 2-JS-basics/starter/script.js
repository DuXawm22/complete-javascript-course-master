/********************
* Variables and data types
*********************/
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnmark = 'John and Mark';

var if = 23;

*/
/************
* Variable mutation and type corection
*/
/*
var firstName = 'John';
var age = 28;

console.log(firstName +' '+age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName +' is a ' + age + ' year old ' + job +'.   Is he married ? ' + isMarried);

// Variable Mutation
age = 'twenty eight';
job = 'driver';


alert(firstName +' is a ' + age + ' year old ' + job +'.   Is he married ? ' + isMarried);

var lastName = prompt('What is his last Name?');
console.log(firstName +' ' + lastName);
*/

/******************
* Basic operators
*/
/*
var year, yearJohn, yearMark;
now = 2020;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;
console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//logical operators

var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeof operators
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);
*/

/**************
* Operator precedence
*/
/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple Operators
var isFullAge = now - yearJohn >= fullAge; //true

console.log(isFullAge);

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x,y;
x = y = (3 + 5) * 4-6; // 8* 4 -6// 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
//x = x + 1;
//x += 1;
x++;
console.log(x);
*/

// CODING CHALLENGE 1
/*
var JohnMass,JohnHeight;
JohnMass = 80; // kg
JohnHeight = 180; // meters
var MarkMass,MarkHeight;
MarkMass = 60; // kg
MarkHeight = 170; // meters

var BMIjohn = JohnMass / JohnHeight**2;
var BMImark =  MarkMass / MarkHeight**2;
console.log(BMIjohn,BMImark);
var BMIcomparison = BMImark > BMIjohn;
console.log("Is Mark's BMI higher than John's? " + BMIcomparison);
*/

/***************
* If / else statements
*/
/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married'){
    console.log(firstName + 'is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried){
    console.log(firstName + ' is married!');
} else{
    console.log(firstName + ' will hopefully marry soon :)');
}

var JohnMass,JohnHeight;
JohnMass = 80; // kg
JohnHeight = 180; // meters
var MarkMass,MarkHeight;
MarkMass = 60; // kg
MarkHeight = 170; // meters

var BMIjohn = JohnMass / JohnHeight**2;
var BMImark =  MarkMass / MarkHeight**2;

if(BMImark > BMIjohn){
    console.log("Mark's BMI is higher than John's");
} else{
    console.log("John's BMI is higher than Mark's")
}
*/
/*
var BMIcomparison = BMImark > BMIjohn;
console.log("Is Mark's BMI higher than John's? " + BMIcomparison);
*/

/****************
*Boolean logic
*/

/*
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName + " is a boy!") 
} else if (age >= 13 && age <   20) { //between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + " is a teenager.");
} else if(age >= 20 && age < 30){
    console.log(firstName + " is a young man.")      
}  else {
    console.log(firstName + " is a man!")
} 
*/

/************
* The Ternary Operator and Switch Statements
*/
/*
var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' :'juice';
console.log(drink);

/*
if(age >= 18){
    var drink = 'beer';
} else {
    var drink = 'juice';
}
*/
/*
// Switch statement
var job = 'instructor';

switch(job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        console.log(firstName + ' does something else.')
}
*/
/*
var firstName = 'John';
var age = 20;

if (age < 13){
    console.log(firstName + " is a boy!") 
} else if (age >= 13 && age <   20) { //between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + " is a teenager.");
} else if(age >= 20 && age < 30){
    console.log(firstName + " is a young man.")      
}  else {
    console.log(firstName + " is a man!")
} 
*/
/*
age = 32;
switch(true){
    case age < 13 :
        console.log(firstName + ' is a boy.')
        break;
    case age >= 13 && age < 20 :    console.log(firstName + ' is a teenager');
        break;
    case age >=20 && age < 30 :
        console.log(firstName + " is a young man.")
        break;
    default :
        console.log(firstName + " is a man.")
        break;
}
*/

/******************
* Truthy and Falsy values and equality operators 
*/

// falsy values, undefined, null, 0 ,'', NaN

// truth values: NOT falsy values
/*
var height;
height = 23;

if(height || height === 0) {
    console.log('Variable is defined')
} else {
    console.log('Variable has NOT been defined')
}

// Equality operators
if (height == '23'){
    console.log('The == operator does type coercion!');
}

*/

// CODING CHALLENGE 2
/*
var JohnScore = 130 + 120 + 103;
var MikeScore = 116 + 94 + 123;
var MaryScore = 200 + 134 + 105;
var MaryAvg = MaryScore / 3;
var JohnAvg = JohnScore / 3;
var MikeAvg = MikeScore / 3;
console.log(JohnAvg,MikeAvg,MaryAvg);
*/
/*
console.log(JohnAvg);
console.log(MikeAvg);
console.log(MaryAvg);
*/
/*
if (MikeAvg > JohnAvg){
    console.log('Mike\'s team wins in the highest average score of ' + MikeAvg);
} else if (MikeAvg === JohnAvg) {
    console.log("Mike's and John's team both have the same highest average score or draw, with the value of" +MikeAvg + " and " + JohnAvg);
} else {
    console.log("John wins in the highest average score with the value of " + JohnAvg);
}

switch(true){
    case MikeAvg > JohnAvg && MikeAvg > MaryAvg :
        console.log('Mike\'s team wins in the highest average score.' + MikeAvg)
        break;
    case MikeAvg < JohnAvg && MaryAvg < JohnAvg :
        console.log("John wins in the highest average score, with the value of " + JohnAvg)
        break;
    case MaryAvg > JohnAvg && MaryAvg > MikeAvg :
        console.log("Mary wins in the highest average score, with the value of " + MaryAvg)
        break;
    default :
        console.log("Mike's and John's and Mary's team both have the same highest average score or draw, with the value of" + MikeAvg +', '+ JohnAvg +', '+ MaryAvg)
        break;
}
*/

/*********************
* Functions
*/
/*
function calculateAge(birthYear){
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName){
    var age = calculateAge(year);
    var retirement = 65 - age;
    if(retirement > 0){
        console.log(firstName + " retires " + retirement + ' years.');
    }else {
        console.log(firstName + " is already retired.");
    }
}

yearsUntilRetirement(1990, "John");
yearsUntilRetirement(1948, "Mike");
yearsUntilRetirement(1969, "Jane");
*/

/*******************
* Function Statements and Expressions 
*/

// Function declaration
/*
function WhatDoYouDo (job, firstName){
    
}
*/

// Function Expression
/*
var WhatDoYouDo = function (job,firstName) {
    switch(job){
        case "teacher" :
            return firstName + ' teaches kids how to code';
        case "driver"  :
            return firstName + ' drives a cab in Lisbon';
        case "designer":
            return firstName + ' designs beautiful websites';
        default :
            return firstName + " does something else";
    }
}

console.log(WhatDoYouDo("teacher","John"));

console.log(WhatDoYouDo("designer","Jane"));

console.log(WhatDoYouDo("retired","Mark"));
*/

/*****************
* Arrays 
*/

/*
// Initialize new array
var names = ['John','Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length]= 'Mary';
console.log(names);

// Different data types

var John = ['John', 'Smith', 1990,'designer', false];

John.push('blue'); // add element into the last array
John.unshift('Mr.'); // add element into the first array
console.log(John);

John.pop();
John.pop(); // removes the last array
John.shift(); // removes the first array
console.log(John);

console.log(John.indexOf(23)); // search for the position of the array element

var isDesigner = John.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

/****************
* CODING CHALLENGE 3 
*/

/*
function JohnTipsCalculation(JohnBills){
    var percentage;
    if(JohnBills < 50){
        percentage = 0.2;
    } else if (JohnBills >=50 && JohnBills <= 200){
        percentage = 0.15;
    } else {
        percentage = 0.1;
    }
    return percentage * JohnBills;
}

var JohnBills = [124,48,268];
var JohnTips = [JohnTipsCalculation(JohnBills[0]), JohnTipsCalculation(JohnBills[1]),JohnTipsCalculation(JohnBills[2])];

var Total = [JohnBills[0] +JohnTips[0], JohnBills[1] + JohnTips[1],JohnBills[2] + JohnTips[2]];

console.log(JohnTips);
console.log(Total);
*/

/***************
* Object and properties 
*/
/*
// Object literal
var John = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried : false  
};
console.log(John.firstName);
console.log(John["lastName"]);
var x = 'birthYear';
console.log(John[x]);

// Mutated
John.job = "designer";
John['isMarried'] = true;
console.log(John);


// new Object syntax
var jane = new Object();
jane.name = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);

*/

/**********************
* Object and Methods 
*/
// This is the same as the current object which is John (this = John).

/*
var John = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane','Mark','Bob','Emily'],
    job : 'teacher',
    isMarried : false,
    calculateAge : function(){
        this.age = 2018 - this.birthYear;
    }
};

John.calculateAge();
console.log(John);
*/

/**********************
* CODING CHALLENGE 4 
*/
/*
var John = {
    firstName : 'John',
    lastName : 'Smith',
    fullName : 'John Smith',
    Mass : 80, // kg
    Height : 180, // meters
    calculateBMI : function(){
        this.BMI = this.Mass / this.Height**2;
        return this.BMI;// ini buat biar kita bisa gunain langsung di if elsenya John.calculateBMI 
    }
};
John.calculateBMI();
var fullNameJohn = John.fullName;
var JohnBMI = John.BMI;
console.log(fullNameJohn);
console.log(JohnBMI);

var Mark = {
    firstName : 'Mark',
    lastName : 'Miller',
    fullName : 'Mark Miller',
    Mass : 70, // kg
    Height : 180, // meters
    calculateBMI : function(){
        this.BMI = this.Mass / this.Height**2;
        return this.BMI;// ini buat biar kita bisa gunain langsung di if elsenya Mark.calculateBMI 
    }
};
Mark.calculateBMI();
var fullNameMark = Mark.fullName;
var MarkBMI = Mark.BMI;
console.log(fullNameMark);
console.log(MarkBMI);

/* gk tau salah kenapa (INCORRECT YANG LAIN BENER)
function HighestBMI(MarkBMI, JohnBMI, fullNameJohn,fullNameMark){
    if(MarkBMI > JohnBMI){
        console.log(fullNameMark +' ' + "Bmi's is higher than " + fullNameJohn);
    } else if (MarkBMI < JohnBMI){
        console.log(fullNameJohn +' ' + "Bmi's is higher than " + fullNameMark);
    } else {
        console.log("Both BMI's are the same or draw.");
    }
}

HighestBMI();
*/
/*
if(Mark.BMI > John.BMI){
        console.log(Mark.fullName +' ' + "Bmi's is higher than " + John.fullName);
    } else if (Mark.BMI < John.BMI){
        console.log(John.fullName +' ' + "Bmi's is higher than " + Mark.fullName);
    } else {
        console.log("Both BMI's are the same or draw.");
    }
*/
// ATAS AMA BAWAH SAMA AJA BEDANYA BAWAH ITU BISA KEK GINI KARENA DI METHOD OBJECTNYA ADA RETURN this.BMI.
/*
if(Mark.calculateBMI() > John.calculateBMI()){
    console.log(Mark.fullName +' ' + "Bmi's is higher than " + John.fullName);
    } else if (Mark.calculateBMI() < John.calculateBMI()){
        console.log(John.fullName +' ' + "Bmi's is higher than " + Mark.fullName);
    } else {
        console.log("Both BMI's are the same or draw.");
}

*/

/***********************
* Loops and Iteration 
*/
/*
for(var i = 1; i <= 20 ; i += 2){
    console.log(i);
}
*/
// i = 0, 0 < 10 true, log i to console, counter is updated i++
// i = 1, 1 < 10 true, log i to console, counter is updated i++
//...
// i = 9, 9 < 10 true, log i to console, counter is updated i++
// i = 1, 10 < 10 FALSE, exit the loop !

/*
var John = ['John', 'Smith', 1990,'designer', false];
*/
/*
console.log(John[0]);
console.log(John[1]);
console.log(John[2]);
console.log(John[3]);
console.log(John[4]);
*/

// For loop
/*
for (var i = 0; i < John.length; i++){ //john.length is 5, the loop will run until it is less than 5 which is 4
    console.log(John[i]);
}


// BEDANYA WHILE AND FOR ITU , KITA CUMA BUTUH CONDITIONNYA AJA WHICH IS YANG i < John.length dan kita harus taro var i = 0; dan i++ dibagian diluar ()

// While loop
var i = 0;
while(i < John.length) {
    console.log(John[i]);
    i++;
}
*/

// Continue and break statements
// Continue digunain buat quit the current iteration of the loop and then lanjut ke iteration selanjutnya

/*
var John = ['John', 'Smith', 1990, 'designer', false];

for(var i = 0; i < John.length; i++ ){
    /*
    if(typeof John[i] !== 'string'){
        continue;
    }
    */
/*
    if(typeof John[i] !== 'string')continue // kalo cuma one line simple statement kyk "Continue" statement kita gk harus buat {} di if
    console.log(John[i]);
}

*/
// !== is a strict 'Different' operator, hampir sama kek === sama juga kek != sama dengan ==


// Bedanya for Break ama Continue adalah Break keluar dari the current iteration dan juga seluruh loopnya. Jadi gk lanjut ke Iteration selanjutnya sama sekali.
/*
for(var i = 0; i < John.length; i++ ){
    if(typeof John[i] !== 'string')break // kalo cuma one line simple statement kyk "Break" statement kita gk harus buat {} di if
    console.log(John[i]);
}

// Looping backwards
// kenapa john.lengthnya harus di - 1, karena kalo gk di - , entar ada hasil undefined 
for(var i = John.length - 1; i >= 0 ; i--){
    console.log(John[i]);
}

*/

/**********************
* CODING CHALLENGE 5 
* CORRECT ANSWER ON LINE 762
*/ 
/*
var John = {
    Bills : [124,48,268,180,42],
    Tips : [],
    TotalPaid : [],
    CalculateTip : function() {
        for (var i = 0; i < this.Bills.length;i++){
            if(this.Bills[i] < 50){
                this.Tips[i] = 0.2 * this.Bills[i];
            }else if (this.Bills[i] >= 50 && this.Bills[i] <= 200){
                this.Tips[i] = 0.15 * this.Bills[i];       
            }else {
                this.Tips[i] = 0.1 * this.Bills[i];
            }
        return this.Tips[i];
        }
    }
    
};

var asdf = John.CalculateTip();
console.log(asdf);
*/
/*
function RoundToTwo (Money) {
    return Math.round(Money);
}
*/
/*
var John = {
    firstName : "John",
    Bills : [124,48,268,180,42],
    Tips : [],
    TotalPaid : [],
    CalculateTip : function() {
        for (var i = 0; i < this.Bills.length;i++){
            if(this.Bills[i] < 50){
                this.Tips[i] = 0.2 * this.Bills[i];
                this.Tips[i] = RoundToTwo(this.Tips[i]);
                return this.Tips;
            }else if (this.Bills[i] >= 50 && this.Bills[i] <= 200){
                this.Tips[i] = 0.15 * this.Bills[i];   
                this.Tips[i] = RoundToTwo(this.Tips[i]);
                return this.Tips;
            }else if(this.Bills[i] > 200) {
                this.Tips[i] = 0.1 * this.Bills[i];
                this.Tips[i] = RoundToTwo(this.Tips[i]);
                return this.Tips;
            } else{
                return console.log("Calculation error");
            }
        }
    }  
};


var asdf = John.CalculateTip();
console.log(asdf);


console.log(John.firstName + "'s Bills Array are : " + John.Bills);
//console.log(John.firstName + "'s Tips Array are : " + John.Tips);

*/
/*
function RoundToTwo (Money) {
    return Math.round(Money);
}

var John = {
    firstName: 'John',
    bills: [124, 48, 268, 180, 42],
    tips: [],
    finalPaid: [],
    CalculateTip: function () {
        for (var i = 0; i < this.bills.length; i++) {
            if (this.bills[i] < 50) {
                this.tips[i] = this.bills[i] * .2;
                this.tips[i] = RoundToTwo(this.tips[i]);
                this.finalPaid[i] = this.tips[i] + this.bills[i];
            } else if (this.bills[i] >= 50 && this.bills[i] <= 200) {
                this.tips[i] = this.bills[i] * .15;
                this.tips[i] = RoundToTwo(this.tips[i]);
                this.finalPaid[i] = this.tips[i] + this.bills[i];
            } else if (this.bills[i] >= 200) {
                this.tips[i] = this.bills[i] * .1;
                this.tips[i] = RoundToTwo(this.tips[i]);
                this.finalPaid[i] = this.tips[i] + this.bills[i];
            } else {
                console.log('Problem!');
            }
            return this.tips[i];
            return this.finalPaid[i];
        }
    },
}
 
console.log(John.CalculateTip());
*/

/* ******************
// CORRECT ANSWER ****************************

function roundToTwo(money){
    return Math.round(money);
}

var John = {
    fullName : 'John Smith',
    bills : [124,48,268,180,42],
    calculateTips : function(){
            this.tips = [];
            this.fullPaid = [];
        for(var i = 0; i < this.bills.length; i++){
                // Determine percentage based on tipping rules
                var percentage;
                var bill = this.bills[i];
            
                if (bill < 50) {
                    percentage = 0.2;
                }  else if (bill >= 50 && bill <= 200){
                    percentage = 0.15;
                }  else {
                    percentage = 0.1;
                }  
                // Add results to the corresponding arrays
                this.tips[i] = bill * percentage;
                this.tips[i] = roundToTwo(this.tips[i]);
                this.fullPaid[i] = bill + this.tips[i];
            }
        }
    }

John.calculateTips();
console.log(John);

console.log(John.fullName + "'s bills in arrays are : " + John.bills);
console.log(John.fullName + "'s tips in arrays are : " + John.tips);
console.log(John.fullName + "'s full paid in arrays are : " + John.fullPaid);


var Mark = {
    fullName : 'Mark Miller',
    bills : [77,475,110,45],
    CalculateTips : function() {
        this.tips = [];
        this.fullPaid = [];
        
        for(var i = 0; i < this.bills.length; i++){
            var percentage;
            var bill = this.bills[i];
            
            if(bill < 100) {
                percentage = 0.2;
            } else if (bill > 100 && bill < 300){
                percentage = 0.1;
            } else {
                percentage = 0.25;
            }
            this.tips[i] = bill * percentage;
            this.tips[i] = roundToTwo(this.tips[i]);
            this.fullPaid[i] = bill + this.tips[i] ;
        }
    }
}

Mark.CalculateTips();
console.log(Mark);

function calculateAverage(FamilyTips){
    var sum = 0;
    for(var i = 0; i < FamilyTips.length ; i++){
        sum = sum + FamilyTips[i];
    }
    return sum / FamilyTips.length;
}
// [2 , 6 , 4] -> 0 / 2 / 8 / 12

// Do the calculations

John.average = calculateAverage(John.tips);
Mark.average = calculateAverage(Mark.tips);
console.log(John,Mark);

if(John.average > Mark.average) {
    console.log(John.fullName + '\'s tips average are bigger than Mark\'s average, which is : '+ John.average);
} else {
    console.log(Mark.fullName + '\'s tips average are bigger than John\'s average, which is : '+ Mark.average);
}


*/
// ****************************************************



















