/* Closures:
     Functions that are bundled together within its
     lexical environment forms a closure.
 */

// example 1

// function x() {
//     var a = 7;
//     function y() {
//         console.log(a);
//     }
//     y();
// }
// x();

//  y() => x() => globalScope => null

// example 2
// var u = 78;
// function x() {
//     var a =7;
//     function y() {
//         console.log(u);
//     }
//     return y;
// }

// var z = x();
// console.log(z);
// z();


// ========================== SetTimeOut with Closures =================

// function x() {
//     var i=1;
//     setTimeout(
//         function() { // annonymous function
//             console.log(i);
//         }, 3000
//     );
// };
// x();
// console.log("Hii");

// WAF 1-5 print numbers with their respective duration

// use let is one of the solution

function x() {
    for(var i=1; i<=5; i++) {
        function closure(param) {
            setTimeout(
                function() {
                    console.log(param)
                }, param*1000
            )
        }
        closure(i);
    }
}

x();



/*
    callBacks: 
    if(response ){
        func()
    }
    setTimeout(function(), timer)

    useEffect(Callback_func,[condition])
 */


