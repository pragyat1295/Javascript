// bind method 

let obj = {
    firstName: 'Pragyat',
    lastName: 'Mishra',
}

let getDetails = function(state, country, continet, planet) {
    console.log(
        this.firstName + ' ' + this.lastName + ' from ' + 
        state + ' in ' + country + ' ' + continet + ' ' + planet
    );
}

let fetchDetails = getDetails.bind(obj, 'UP', 'Asia');

// console.log(fetchDetails);

fetchDetails('India', 'World');

// ................. Custom bind ............................

Function.prototype.myBind = function(...args) {
    let myObj = this;
    // console.log(args);
    let params = args.slice(1);
    console.log(params);

    return function(...args2) {
        // myObj.call(args[0]);
        let arr = [...params, ...args2];
        myObj.apply(args[0], arr);
    }
}

let fetchData = getDetails.myBind(obj, 'UP', 'Asia');
console.log(fetchData('India', 'World')) ;