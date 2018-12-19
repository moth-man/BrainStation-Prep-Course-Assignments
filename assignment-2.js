
//Challenge 1 Version 1
function triangle(num, symb){
    var str = " ";
    for(let i = 0; i <= num; i++){
        for(let j = 0; j < i; j++){
            str += symb;
        }
        console.log(str);
        str = "";
    }
}

triangle(7,"#");
/* Version 1 creates a blank string variable. There is a for-loop
 * that indexes to the input number of the function, followed by a
 * nested for-loop that indexes to the current value of the first for-loop index.
 * The variable str then uses the += operator to add an asterisk the number
 * of times as the index. Outside of the second for-loop but still inside the second,
 * the console prints out the string and then resets the variable to a blank string
 * so the process can be repeated.
 */

//Challeng 1 Version 2
function triang(num, symb){
    for(k = 0; k <= num; k++){
        console.log(symb.repeat(k));
    }
}

triang(7,"*");

/* Version 2 uses the .repeat() method of a variable to repeat the symbol
 * as many times as the parameter specifies.
 */

//Challenge 2
function isEven(numb){
    numb %= 2;
    if(numb === 0){
        console.log("Number is even")
    }
    else if(numb === 1){
        console.log("Number is odd")
    }
    else if(isNaN(numb)){
        console.log("Not a number");
    }
}

isEven(16);
isEven(79);
isEven("pi");

/* isEven takes in a number variable and immediately uses the %= variable
 * to find the remainder of division by two. If even, the console returns 
 * an even announcement string. If odd, the console returns an odd number
 * announcement string. If a string is input into the method, the variable becomes
 * NaN so an .isNan() method is used to see if a string was input into the method and 
 * returns a message if true.
 */