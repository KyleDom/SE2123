const books:string[] = ['Scrum for all ages','Nancy Drew','Hardy Boyz','Atomic Habits',
                        'Thinking like a UX Researcher']
const authors:string[] = ['Johnson','Sperry','Red','Michael','Jingo']
const laneNumber:number[] = [1,2,3,4,5,6,7]
const bookstore = [
    {book:'Christmas in our hearts',price: 230},
    {book:'Santa and his gifts',price: 240},
    {book:'Merry O Christmas',price: 210},
    {book:'Jose Mari Chan Memes',price: 220},
    {book:'Christmas Village',price: 254},
    {book:'Hanzel and Gretel',price: 230},
    {book:'The Grinch',price: 230}
]

// Use forEach to console log each book in the books array
    console.log('Books available: ')
    const bookArray = books.forEach(book => console.log(book)) 

// Use map to create a new array by transforming the text to lowercase in the authors and books array (make sure to make it in such way that you can easily use it to other arrays)
    console.log('Books and Author array to lower case: ')
    const authorsToLowerCase = authors.map(author => author.toLowerCase())
    const booksToLowerCase = books.map(book => book.toLowerCase())
    console.log('Authors: ')
    console.log(authorsToLowerCase)
    console.log('Books: ')
    console.log(booksToLowerCase)

// Use map to create a new array by transforming each number in the lane aray to its cube equivalent
    console.log('Cube of lane number arrays')
    const laneNumberCube = laneNumber.map(number => Math.pow(number, 3))
    console.log(laneNumberCube)

// Use map to map the book with their corresponding prices
        console.log('Book and Corresponding price: ')
        const bookPrices = bookstore.map((item:{book: string,price: number}) => item.price)
        console.log(bookPrices)

// Use filter to filter out authors with more than 5 characters
        console.log('Authors with 5 characters or less: ')
         const authorArray = authors.filter(author => author.length <= 5)
         console.log(authorArray)

// Use filter to filter out book starting with 'C' in the bookstore array
        console.log("Books that don't start with " + "C:")
        const bookstoreArray = bookstore.filter(function(store: {book: string, price: number}){
            if(!store.book.startsWith("C")){
                return store.book
            }
        })
        console.log(bookstoreArray)
        


