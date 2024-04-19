const myNumber = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 , 11 , 12 , 13 , 14]
// const newNum = myNumber.map( (num) => num * 10).

const newNum = myNumber
                .map( (num) => num *5)
                .map( (num) => num + 1)
                .filter( (i) => i >= 51)
console.log(newNum);

// ++++++++++++++++++++++++++++++++++++++= Reduce Method =++++++++++++++++++++++++++++++++++++++++++++++++
const myNum = [1 , 2 , 3 , 4]

// const myTotal = myNum.reduce( (acc , curVal) =>  {
//     console.log(` Accumlator ${acc} and Curent Vaule is :  ${curVal} `);
//     return acc + curVal
// } , 0)

const myTotal = myNum.reduce( function ( acc , curVal) {
    return acc + curVal
}  , 0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName : 'js Course',
        price : 2999
    },
    {
        itemName : 'java Course',
        price : 3999
    },
    {
        itemName : 'python Course',
        price : 4999
    },
    {
        itemName : 'c Course',
        price : 5999
    }
]

const priceToPay = shoppingCart.reduce( (acc, curVal) => acc + curVal.price , 0)
console.log(priceToPay);