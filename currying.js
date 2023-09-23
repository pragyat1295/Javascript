// let curry = function(func) {
//     return function(a) {
//         return function(b) {
//             return func(a,b);
//         }
//     }
// }

// let sum = function(a,b) {
//     return a+b;
// }

// console.log(sum(1,2));

// let currySum = curry(sum);

// console.log(currySum(1)(2));

// ==============================================================================

// sum(1)(2)(3)....()

// let sum = function(a) {
//     return function(b) {
//         if(b) {
//             return sum(a+b)
//         }
//         else {
//             return a;
//         }
//     }
// }

// console.log(sum(1)(5)(8)());
// =============================================================================

// convert sum(1,2,3..) to sum(1)(2)(3)...()

let curry = function(func) {
    return function curriedFunc(...args) {
        if(args.length >= func.length) {
            return func(...args);
        }
        else {
            return function(...args2) {
                return curriedFunc(...args, ...args2);
            }
        }
    }
}

let sum = function(a,b,c,d) {
    return a+b+c+d;
}

let curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)(4));


