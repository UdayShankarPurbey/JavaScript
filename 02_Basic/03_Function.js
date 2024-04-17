function sayMyName(){
    console.log("u");
    console.log("d");
    console.log("a");
    console.log("y");
}

sayMyName()

function addTwoNumbers(num1 , num2){ //num1 and num2 are parameter
    console.log(num1+num2);
}

addTwoNumbers(10,20); // 10 , 20 is argument

function addTwoNumbersRet(num1,num2){
    return num1+num2;
}

const res = addTwoNumbersRet(10,20);
console.log(res);

function loginUserMessage(username) {
    if(!username){
        return 'Username is not defined';
    } 
    return `${username} Just logged in`
}

console.log(loginUserMessage());


function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(100 , 200 , 300 , 400 , 500));

const user = {
    username : "user",
    price : 199
}

function handleObject(anyObject) {
    console.log(`Username :  ${anyObject.username} and Price : ${anyObject.price}`);
}

handleObject(user);
handleObject({username : "abc", price :300});

const myArr= [200 , 300 , 400 , 500]

function handleArray(anyArray) {
    return anyArray
}

console.log(handleArray(myArr));