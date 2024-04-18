for(let i = 0; i < 10; i++) {
    console.log(i);
}

for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        // console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = [ "flash" , "batman", "superman"]

for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        console.log("Data Found");
        break;
    }
    console.log(`value of i : ${i}`);
}
for(let i = 1; i <= 20; i++) {
    if(i == 13) {
        console.log("Data Not Required");
        continue;
    }
    console.log(`value of i : ${i}`);
}