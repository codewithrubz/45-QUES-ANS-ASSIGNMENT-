//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent 
//if statements that check for certain fruits in your array
//• Write five if statements. Each should check whether a certain kind of fruit is in your array. 
//If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favourite_fruits = ['Mango , Orange , Apple'];
if(favourite_fruits.includes("Mango")){
    console.log("I like Mangos!");
}

if(favourite_fruits.includes("Oranges")){
console.log("I like Orange!");
}

if(favourite_fruits.includes("Apple")){
    console.log("I enjoy Apples!");
}

if(favourite_fruits.includes("Apricot")){
    console.log("I love Apricots!");
} else{
    console.log("Apricots are not in your favourite fruit list!");
    
}


if(favourite_fruits.includes("Banana")){
    console.log("I really like Banana!");
}else {
    console.log("Banana is not in your favourite fruit list!");
    
}