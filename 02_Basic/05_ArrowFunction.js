const user = {
    username: "uday",
    price : 234,
    welcomeMessage : function() {
        console.log(`Welcome to Website ${this.username}`);
    }
}

user.welcomeMessage();
user.username = "not Known"
user.welcomeMessage();

function hey() {
    let userName = "uday"
    console.log(this.userName);
}

hey()

const hey2 = () => {
    let userName = "uday"
    console.log(this.userName);
}

console.log(hey2());

// const sumNumber = ( num1 , num2 ) => {
//     return num1 + num2;
// }

// const sumNumber = ( num1 , num2 ) =>  num1 + num2;
const sumNumber = ( num1 , num2 ) =>  (num1 + num2);


console.log(sumNumber(10,20));


