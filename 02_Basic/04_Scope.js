let a = 10
const b = 20
var c = 30

if(true) {
    let a = 20;
    const b = 30;
    var c = 40;    
    console.log("innner", a, b, c);
}
console.log(a);
console.log(b);
console.log(c);

function one () {
    const username = "anonymous";
    function two() {
        const website = "http://youteube.com";
        console.log(username);
    }
    // console.log(website);
    two();
}

one();

console.log(addOne());
function addOne(num) {
    return num + 2;
}

// console.log(addTwo(10)); -- throw Error
const addTwo = function(num) {
    return num + 2;
}
console.log(addTwo(10));

