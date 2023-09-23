// console.log("connected");
let x = 7;

b();


let a = () => {
    let x = 10;
    console.log(x);
}

a();

function b() {
    var x = 100;
    console.log(x);
}

console.log(x);