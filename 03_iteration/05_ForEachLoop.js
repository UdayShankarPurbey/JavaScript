const coding = [ 'javascript', 'ruby', 'java', 'python', 'csharp' ];

// coding.forEach(function (val) {
//     console.log(val);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printData(data) {
//     console.log(data);
// }

// coding.forEach(printData); //here just pass reference not exicute it.

coding.forEach((item , index , data) => {
    console.log(`${item} --- ${index} --- ${data}`);
});

const myCoding = [
    {
        languageName: 'javascript',
        languageFileName: 'js'
    },
    {
        languageName: 'java',
        languageFileName: 'java'
    },
    {
        languageName: 'python',
        languageFileName: 'py'
    },
    {
        languageName: 'c',
        languageFileName: 'cpp'
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})

/**
 * Note: ForEach Not return any value
 */