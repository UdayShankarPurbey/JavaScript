const arr = [ 'a', 'b', 'c', 'd' ]

for(const num of arr) {
    console.log(num)
}

const greeting = "Hello world!"
for(const greet of greeting) {
    // console.log(greet)
}


//Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('Fr', 'France')
map.set('SI', 'Sri Lanka')
map.set('SI', 'Sri Lanka')

console.log(map)

for(const [key, value] of map) {
    console.log(key, value)
}
