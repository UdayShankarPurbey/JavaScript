const myNums =  [1, 2, 3, 4, 5 , 6, 7, 8, 9, 10, 11];
const newNum = myNums.filter((val) =>  val%2 ==0 )
console.log(newNum);
const newNum2 = myNums.filter((val) => {
    return val%2 !=0
})
console.log(newNum2);

/**
 * Note : Difference Between Filter and Find 
 * Filter returns the array but find returns object.
 */

const books = [
    {
      "title": "The wolf",
      "genre": "Realistic fiction",
      "publish": 1921,
      "edition": 2004
    },
    {
      "title": "cyber wars",
      "genre": "Coming-of-age fiction",
      "publish": 1901,
      "edition": 1991
    },
    {
      "title": "life at the end",
      "genre": "Literary fiction",
      "publish": 1973,
      "edition": 1979
    },
    {
      "title": "Life of pi",
      "genre": "Literary classic",
      "publish": 1951,
      "edition": 1985
    },
    {
      "title": "the journey to success",
      "genre": "Classic literature",
      "publish": 1951,
      "edition": 1993
    },
    {
      "title": "Money Magic",
      "genre": "Psychological fiction",
      "publish": 2000,
      "edition": 2009
    },
    {
      "title": "Monk of the night",
      "genre": "Literary classic",
      "publish": 2001,
      "edition": 2003
    },
    {
      "title": "Story of a yooung girl",
      "genre": "Modern classic",
      "publish": 2005,
      "edition": 2007
    },
    {
      "title": "Barbie world",
      "genre": "Teen fiction",
      "publish": 1951,
      "edition": 2010
    },
    {
      "title": "The Catcher in the Rye",
      "genre": "American literature",
      "publish": 1951,
      "edition": 1960
    }
  ]

const newBooks = books.filter((book) => book.edition >= 2000 && book.publish >= 2001)
console.log(newBooks);
