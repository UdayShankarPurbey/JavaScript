const name = 'Uday'
const value = 30

console.log(name + ' ' + value)
console.log(`${name} ${value}`)

const gameName = new String("uday shankar Purbey")
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,4)
console.log(newString);

const newString2 = gameName.slice(-12,8)
console.log(newString2);

const newString3 = "            uday           "
console.log(newString3);
console.log(newString3.trim());


const url = "http://uday.com/uday%20Shankar%20Purbey"
console.log(url.replace('%20','-'));

const data = 'hello world Uday! ' 

console.log(data.includes('world'));

console.log(gameName.split(' '));