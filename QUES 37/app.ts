//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//In Typescript
function make_shirt(Size: string= "Large", message: string = "I Love TYPESCRIPT." ); void{
    console.log(`I want ${Size} size T-Shirts with message ${message} `);
}
make_shirt() //default size and message

make_shirt("Medium")//medium size shirt with default message

make_shirt("Small","I Love Programming")//size with custom message