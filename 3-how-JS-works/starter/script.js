///////////////////////////////////////
// Lecture: Hoisting


/*
EXECUTION CONTEXT OBJECT :
- Variable Object (VO)
- Scope Chain
- "This" Variable
*/
/*
calculateAge(1965);


// Function declaration
function calculateAge(year){
    console.log(2016 - year);
}


// retirement(1965);

// Function expression, Hoisting doesn't work for Function expression, only for function declaration. So in function expression you have to put the Call Function AFTER the function expression. Which in this case you put retirement(1965); below the var retirement.
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

retirement(1965);


// Variables

console.log(age); // if you put console.log first, it's gonna output undefined
var age = 23;
console.log(age);

function foo(){
    console.log(age); // prints out undefined
    var age = 65;
    console.log(age);// prints out 65, because it is in the Foo Execution Context Object
}

foo();
console.log(age); // prints out 23 , because it is in the Global Execution Context Object

// so both variable can be the same name, but are different variable object.
*/

///////////////////////////////////////
// Lecture: Scoping


// First scoping example
// Lexical Scoping
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}

*/


// Example to show the differece between execution stack and scope chain

// EXECUTION STACK :
/*
Starts from : 1. Global Execution Context
              2. first();
              3. second();
              4. third();
*/

// SCOPE CHAIN :
/*
Starts from : 1. third();
              2. second();
              3. first();
*/
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third();
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}

// the function third() are in a different scope from function first() and second()

// Output error because the b,and c are not available for the function third(), because the variable b and c are in the local scope chain/ first scope 

*/

///////////////////////////////////////
// Lecture: The this keyword

/* This keyword :
- Regular function call : the this keyword points at the global object (the "window" object, in the browser)

- Method call : the this variable points to the object that is calling the method.

the this keyword is not assigned a value until a function where it is defined is actually called.
*/

//console.log(this); // gonna output the window object

/*
calculateAge(1985);

function calculateAge(year){
    console.log(2016 - year);
    console.log(this);
}// gonna output 31, which is from the first console.log and gonna output the window object, because this is gonna point to the window object

*/

var John = {
    name : "John",
    yearOfBirth : 1990,
    calculateAge : function(){
        console.log(this); // refers or point to the John object
        console.log(2016 - this.yearOfBirth);
        
        /*
        function innerFunction(){
            console.log(this); // gonna output the window object or default global scope, because it point to the window object
        }
        innerFunction();
        */
    }
}

John.calculateAge();

var Mike = {
    name : "Mike",
    yearOfBirth : 1984,
    // Method Borrowing
};

// Method Borrowing, Mike borrow
/*
John.calculateAge method as Mike's own method (VERY USEFUL, just remember to use the this keyword, because if you don't put this keyword and put John.yearOfBirth instead of this.yearOfBirth (on line 141) then the Method Borrowing doesn't work)
*/
Mike.calculateAge = John.calculateAge;
Mike.calculateAge();


