const myArr = [ 0 , 1, 2, 3, 4, 5, 6]
const myHeros = [ 'Shaktiman' , 'Naagraj', 'Doga']
const marks = new Array(67, 43, 98, 39, 89)
console.log(marks[0]);

// myArr.push(7)
// myArr.push(8)
// myArr.pop()
// myArr.unshift(9) //[ 9, 0, 1, 2,3, 4, 5, 6]
// myArr.shift()//[ 1, 2, 3, 4, 5, 6 ]
console.log(myArr);
console.log(myArr.includes(6));
console.log(myArr.indexOf(7));


// splice and slice
const newArr = myArr.join();
console.log(myArr , newArr);
console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B" , myArr);
const myn2 = myArr.splice(1,3)
console.log(myn2);
console.log("C" , myArr);


const marvel_heros = [ "Thor" , "Ironman" , "Spiderman"]
const dc_heros = ["Superman" , "Flash" , "Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros);

const allHeros = [...marvel_heros,...dc_heros ]
console.log(allHeros);

const anotherArray = [ 1, 2, [3, 4, 5], [6, 7, 8, [9, 10, 11 ,[12 , 13, 14]],15]];
const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Uday"));
console.log(Array.from("Uday Kuamr Purbey"));
console.log(Array.from({name : "Uday Kuamr Purbey"})); //retuns empty array if you define properly


let score1 = 24
let score2 = 15
let score3 = 8
let score4 = 3

console.log(Array.of(score1, score2, score3, score4));