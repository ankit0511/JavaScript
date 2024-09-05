const arr = [1, 2, 3, 4, 5, 6]


// filter always return a value 
const newArr = arr.filter((items) => items < 5)

console.log(newArr)


// if we use scope the we have to use return keyword 

const newArr1 = arr.filter((items) => {

     return items < 5
})

console.log(newArr1);

// dealing with objets 

const books = [
    {
      name: "The Great Gatsby",
      genre: "Classic",
      yearOfPublication: 1925,
      currentEdition: "5th"
    },
    {
      name: "To Kill a Mockingbird",
      genre: "Fiction",
      yearOfPublication: 1960,
      currentEdition: "4th"
    },
    {
      name: "1984",
      genre: "Dystopian",
      yearOfPublication: 1949,
      currentEdition: "7th"
    },
    {
      name: "The Hobbit",
      genre: "Fantasy",
      yearOfPublication: 1937,
      currentEdition: "6th"
    },
    {
      name: "Harry Potter and the Sorcerer's Stone",
      genre: "Fantasy",
      yearOfPublication: 1997,
      currentEdition: "3rd"
    }
  ];
  
 const newbooks = books.filter((book)=>{
    return book.genre ==="Fantasy"
 })


  console.log(newbooks);
  