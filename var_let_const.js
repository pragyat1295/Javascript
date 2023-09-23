// var x = 10;
// console.log(window.x);
// console.log(this.x);

// var , let and const 

// var a = 10;
// var a = 15;
// console.log(a);
// function component() {
//     // nkllkasndw
// }

// let x = 15;

// console.log(x);
// var b = function() {
// //   kljasdklas
// }

// let func = () => {
//     //  jklhasdjkla
//     }






// =================== Temporal deadzone ==============

/*
    Script=> hoisted(undefined) => getting value => print

    step2-> step3 = temporal deadzone bolte hai.
 */


/* 
this:  represents an object that function is the property of.
*/ 



// =========================== Blocked scope and shadowing ==================

/*
 scope: it combines the multiple statements into one group.
*/

// if(a===b) 
{
    // statement 1
    // statement 2
}

// this is functional scope
// function f1() {
//     var a1 = 55;
// }


// {
//     var a2 = 10;
//     let a3 = 14;
// }
// const a4 = 'jashjklda';
// var a5 = 15;
// var a5 = 'sdasd';

// let a6 = 11;
// a6 = 'ssssfffffs';

// log(a4)
// console.log(a2, a3);

/* 
    priority as a dev among var/let/const

    1. Const
    2. Let
    3. Var(try to avoid)
*/ 

// ====================== Questions =====================

// que1.
let b = 100;
{
    let b = 10;
}
// b = 15;
// console.log(b);

// Q2
var a = 100;
{
    var a = 10;
}
// console.log(a);

// Q3
// let c = 100;
// {
//     var c = 10;
// }
let c = 100;
function cc() {
    var c = 10;
}
console.log(c);
