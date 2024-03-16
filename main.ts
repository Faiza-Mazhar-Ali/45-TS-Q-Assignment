 //Question Num 2
 let personName: string = "Aliba";
  console.log(`"Hello ${personName}, would like to join me for coding practice?"`);


 //-----------------------------------------------------------------------

  //Question Num 3

   //upercase , lowercase  , titlecase
 let NameCase: string = "Faiza mazhar ali";

 console.log(NameCase.toUpperCase());

 console.log(NameCase.toLowerCase());

 console.log(NameCase.replace(/\b\w/g, (char) => char.toUpperCase()));

 //------------------------------------------------------------------------

  //Question Num4

   //famous quote
 let famousQuote: string = `Nelson Mandela once said, "It always seems impossible until it's done."`;
 console.log(famousQuote);

 //------------------------------------------------------------------------

   //Question Num 5

let famous_Person: string = "Nelson Mondala";
let quote: string = "It always seems impossible until it's done.";
let message: string = `${famous_Person} Once said, "${quote}"`;
console.log(message);

//-----------------------------------------------------------------------

//Question Num 6

let whitespaceName: string = "\n\t Faiza Ali \t\n";
console.log(whitespaceName);

let nowhitespaceName: string = whitespaceName.trim();
console.log(nowhitespaceName);

//-----------------------------------------------------------------------

//Question Num 7n8

//Write addition, subtraction, multiplication, and division operations that each result in the number 8.
let num: number = 6;
let numbr: number = 2;

let result1: number = num + numbr;
console.log("Addition result:", result1);

let numb1: number = 11;
let numb2: number = 3;

let result2: number = numb1 - numb2;
console.log("Subraction result:", result2);

let numb3: number = 2;
let numb4: number = 4;

let result3: number = numb3 * numb4;
console.log("Multiplication result:", result3);

let num5: number = 16;
let num6: number = 2;

let result4: number = num5 / num6;
console.log("Division result:", result4);

//-----------------------------------------------------------------------

//Question Num 9
 let favoritNumber: number = 7;
 let Message: string = `${favoritNumber} is my favorite number.`;
 console.log(message);

//-----------------------------------------------------------------------

 //Adding Comments in Exercise 10

/*This program defines "for Loops" 
 this is a for  which is used for printing same thing in multiple times*/
for (let i = 1; i <= 5; i++) {
  console.log("Faiza");
}

//This program defines "String" 
let fullName: string = "Ibrahim";
console.log(fullName);

//-----------------------------------------------------------------------

//Question Num 11

// Using Array for printing my friends name in a list
let names: string[] = ["Sadaf", "Rani", "Paras", "Nargis"];

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);

//-----------------------------------------------------------------------

//Question Num 12

//Personalized message to friends with their names
let Names: string[] = ["Sadaf", "Rani", "Paras", "Nargis"];

for (let Name of Names) {
  console.log(`Hello ${Name} hope you are fit and fine.`);
}

//-----------------------------------------------------------------------

//Question Num 13

//Your favorite mode of transportation
let carsName: string[] = ["Car", "Aeroplane", "Bus", "Bike"];

for (let i = 0; i < 4; i++) {
  console.log(`I would love to own a ${carsName[i]}`)
}

//-----------------------------------------------------------------------

//Question Num 14

//EX-14, List of people who would I like to Invite for dinner
let guest_list: string[] = ["Anjali", "Urmeela", "Sawera"];

for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `Dear, ${guest_list[i]}! \nI am feeling pleasure to invite you for dinner, I hope you will join us for dinn er on Monday.\n`
  );
}

//-----------------------------------------------------------------------

//Question Num 15

//New set of invitations
let guests_list: string[] = ["Urmeela", "Anjali", "Sawera"];

console.log(
  `Due to some personal issue ${guests_list[0]} will not join us for dinner.\n`
);

guests_list[0] = "Nazia";

for (let guest of guests_list) {
  console.log(`Hello ${guest} please join us for dinner`);
}

//-----------------------------------------------------------------------

//Question Num 16 

//Modifying The list of Guests
//Adding three friends in the array
let GuestList: string[] = ["Anjali", "Nazia", "Sawera"];

console.log(
  "Hello friends, I have found a bigger dinner table and there are some space for three more people, So we have three more friends to invite on dinner."
);

//Adding one friend in the beginning of array
GuestList.unshift("Zara");

//Adding one friend in the middle of array
GuestList.splice(2, 0, "Ayesha");

//Adding one friend in the end of array
GuestList.push("Kiran");

//priting a new set of invitation messages

for (let i = 0; i < GuestList.length; i++) {
  console.log(`Dear ${GuestList[i]} you are invited for dinner on Monday.`);
}


//-----------------------------------------------------------------------

//Question Num 17 

//list of guest who are invited
//@ts-ignore
let guestList: string[] = [
  "Zara",
  "Anjali",
  "Ayesha",
  "Nazia",
  "Sawera",
  "Kiran",
];

//Sorry message to friends
console.log(
  "Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.\n"
);

//removing guests names

while(guestList.length > 2){
    let guest = guestList.pop()
   console.log(`I am sorry ${guest} I can't invite you to dinner.`);
}

//let raimaing guest know that the are still invited
  guestList.forEach(remainGuest => console.log(`Hello dear ${remainGuest} you are still invited for dinner.`));

//Removing remaining two last guest 
guestList.pop();
guestList.pop();

console.log("Empty list:", guestList);

//-----------------------------------------------------------------------

//Question Num 18 

//1..Store the locations in a array. Make sure the array is not in alphabetical order.
let seeingWorld: string[] = [
  "Landon",
  "South Korea",
  "China",
  "USA",
  "Maldives",
];
//2.. Print your array in its original order
console.log(seeingWorld);

//3..Print your array in alphabetical order without modifying the actual list.
let copyOfArray = seeingWorld.slice();
let sortedArry = copyOfArray.sort();
console.log(sortedArry);

//4.Show that your array is still in its original order by printing it.
console.log(seeingWorld);

//5..Print your array in reverse alphabetical order without changing the order of the original list.
let copyOfArray2 = seeingWorld.slice();
let ReveseOrigAray = copyOfArray2.reverse();
console.log(ReveseOrigAray);


//6.Show that your array is still in its original order by printing it again.
console.log(seeingWorld);

//7..Reverse the order of your list. Print the array to show that its order has changed.
let ReveseOrigAray2 = seeingWorld.reverse();
console.log(ReveseOrigAray2);

//8.. Reverse the order of your list again. Print the list to show it’s back to its original order.
let againreverse = ReveseOrigAray2.reverse();
console.log(againreverse);

//9..Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
let sortOrigArray = seeingWorld.sort();
console.log(sortOrigArray);

//10..Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let reversesortedArray = sortOrigArray.reverse();
console.log(reversesortedArray);

//----------------------------------------------------------------------

//Question  Num 19

/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/

let dinnerGuest: string[] = ["Anjai","Urmeela", "Saweera", "Kiran", "Ayesha", "Aliba"];

console.log(`I'm inviting ${dinnerGuest.length} number of guests to my dinner which are following\n`);

for (let i = 0; i < dinnerGuest.length; i++){
    console.log(`${i + 1}. ${dinnerGuest[i]}`);
    
}


//----------------------------------------------------------------------

//Question  Num 20

//20..Think of something you could store in a array. For example, you could make a list of mountains, rivers,
//countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let faveritplace: string[] = [
  "Amarica",
  "South Korea",
  "UK",
  "Malaysia",
  "Kashmir",
];

faveritplace.forEach((item) => {
  console.log(item);
});

//----------------------------------------------------------------------

//Question  Num 21

/*They think of something you could store in a TypeScript Object. 
Write a program that creates Objects containing these items.*/
let studentName = {
  name: "Ahmad",
  age: "21",
  gender: "male",
  rollNumber: "234056",
};
console.log(studentName);


//----------------------------------------------------------------------

//Question  Num 22

//Intentional Error: 
let indexErorr: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

console.log(indexErorr[12]);
console.log(indexErorr[11])

//----------------------------------------------------------------------

//Question  Num 23

//Conditional Tests: 
let car = "subaru";

console.log("Is car == 'subaru'? I predict True.");

console.log(car == "subaru");
console.log(car == "Civic");

let numb: any = 25;

console.log("Is numb == 25 (in numbers)? I predict true.");

console.log(numb === 25);
console.log(numb === "25");

let girl = "female";

console.log("Is girl == 'female'? I predict true.");

console.log(girl == "female");
console.log(girl == "male");

let robot = "machine";

console.log("Is robot == 'machine'? I predict true.");

console.log(robot == "machine");
console.log(robot == "human");

let day = "monday";

console.log("Is day == 'monday'? I predict true.");

console.log(day == "monday");
console.log(day == "Sunday");

//----------------------------------------------------------------------

//Question  Num 24

//Tests for equality and inequality with strings
let color = "purple";

console.log("Is color == 'purple'? I predict true.");
console.log(color == "purple");

console.log("Is color == 'violet'? I predict false.");
console.log(color == "violet");

//Tests using the lower case function

let country = "United States Of America";

console.log(
  "Is country.tolowerCase == 'united states of america'? I pedict true."
);
console.log(country.toLowerCase() == "united states of america");

/*Numerical tests involving equality and inequality, greater than and less than, 
 greater than or equal to, and less than or equal to*/

let a = 10;
let b = 8;

console.log("Is a != b? I predict true.");
console.log(a != b);

console.log("Is a == b? I predict false.");
console.log(a == b);

console.log("Is a > b? I predict true.");
console.log(a > b);

console.log("Is a < b? I predict false.");
console.log(a < b);

console.log("Is a >= b? I predict true.");
console.log(a >= b);

console.log("Is a <= b? I predict false.");
console.log(a <= b);

//Tests using "and" and "or" operators

let num1 = 10;
let num2 = 20;
let num3 = 30;

//AND operator
console.log("Is num1 < num2 && num2 < num3? I predict true.");
console.log(num1 < num2 && num2 < num3);

console.log("Is num1 < num2 && num2 > num3? I predict false.");
console.log(num1 < num2 && num2 > num3);

//OR oprator
console.log("Is num1 < num2 || num2 < num3? I predict true.");
console.log(num1 < num2 || num2 < num3);

console.log("Is num1 < num2 || num2 > num3? I predict false.");
console.log(num1 > num2 || num2 > num3);


//Test whether an item is in an array:
let fruits: string[] = ["Apple", "Orange", "Banana", "Carrot"];

console.log("Is 'Apple' in fruits array? I predict true.");
console.log((fruits.indexOf('Orange') == 1).toString());

//Test whether an item is not in a array
console.log("Is 'Grapes' in fruits array? I predict false.");
console.log((fruits.indexOf("Grapes") !== -1).toString());


//----------------------------------------------------------------------

//Question  Num 25

/*Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color 
and assign it a value of 'green', 'yellow', or 'red'.
let alien_color: string = 'green';*/

/*Write an if statement to test whether the alien’s color is green. If it is,
 print a message that the player just earned 5 points.*/
let alien_color: string = "green";

if (alien_color === "green") {
  console.log("Player just earned 5 points.");
}


/*Write one version of this program that passes the if test and another that fails. 
(The version that fails will have no output.)*/
let  AlienColor: string = 'red';

if (AlienColor === "green") {
  console.log("Player just earned 5 points.");
}


//----------------------------------------------------------------------

//Question  Num 26

//if-else statement
//first version
let alien_color1: string= "Green";

if (alien_color1 === "Green") {
    console.log("The player just earned 5 points.");
}else {
    console.log("The player just earned 10 points."); 
}


// second version 

let alien_color2: string = "Yellow";

if (alien_color2 === "Green") {
  console.log("The player just earned 5 points.");
} else {
  console.log("The player just earned 10 points.");
}

//----------------------------------------------------------------------

//Question  Num 27

//• If the alien is green, print a message that the player earned 5 points.
let aliensColor: string = "Green";

if (aliensColor === "Green") {
  console.log("player just earned 5 points.");
} else {
  console.log("player just earned 10 points");
}

//• If the alien is yellow, print a message that the player earned 10 points.
let alien_Color: string = "yellow";

if (alien_Color === "yellow") {
  console.log("player just earned 10 points.");
} else {
  console.log("player just earned 15 points");
}

//• If the alien is red, print a message that the player earned 15 points.
let  alienColor: string = "red";

if (alienColor === "red") {
  console.log("player just earned 15 points.");
} else {
  console.log("player just earned 10 points");
}


//----------------------------------------------------------------------

//Question  Num 28

/*Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
• If the person is less than 2 years old, print a message that the person is a baby.

• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.

• If the person is at least 20 years old but less than 65, print a message that the person is an adult.

• If the person is age 65 or older, print a message that the person is an elder.*/
let age: number = 25;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder");
}


//----------------------------------------------------------------------

//Question  Num 29

//Favorite Fruit: 

let faverit_fruits: string[] = ["Apple", "Orange","Grapes",];
console.log(faverit_fruits);

if ((faverit_fruits.indexOf("Apple") == 1).toString()) {
  console.log("You really like Apple!");
}

if ((faverit_fruits.indexOf("Orange") == 1).toString()) {
  console.log("You really like Orange!");
}

if ((faverit_fruits.indexOf("Pineapple") == 1).toString()) {
  console.log("Pineapple are not in your array list!");
}

if ((faverit_fruits.indexOf("Grapes") == 1).toString()) {
  console.log("You really like Grapes!");
}

if ((faverit_fruits.indexOf("Peach") == 1).toString()) {
  console.log("Peach are not in your array list!");
}

 //console.log((fruits.indexOf('Orange') == 1).toString());

 //----------------------------------------------------------------------

 //Question  Num 30

  //Hello Admin:
  let username: string[] = ["Admin", "Gentleman", "Ladyies", "CEO", "Incharge"];

  for (let i = 0; i < username.length; i++) {
    if (username[i] == "Admin") {
      console.log("Hello Admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${username[i]}, thank you for logging in again.`);
    }
  }

  //----------------------------------------------------------------------

 //Question  Num 31

//method 1
let usernames: string[] = ["admin", "Gentleman", "Ma'am", "Charlie", "David"];

if (usernames.length == 0) {
  console.log("We need to find sume users");
} else {
  for (let i = 0; i < usernames.length; i++);
}
console.log(usernames);

//method 2
//removing all array
let Usernames: string[] = [];

if (Usernames.length == 0) {
  console.log("We need to find sume users");
} else {
  for (let i = 0; i < Usernames.length; i++);
}
console.log(Usernames);


 //----------------------------------------------------------------------

 //Question  Num 32

 
//list of current_users
let current_users: string[] = ["Ali", "Raza", "humza", "Umair", "rizwan"];
//list of new_user
let new_users: string[] =["Mehran", "Ayan", "Kamran", "RIZWAN","HAMZA"];

// Function to check if a username already exists
function isUsernameTaken(username: string): boolean {
    return current_users.some(user => user.toLowerCase() === username.toLowerCase());
}

// Loop through new usernames to check for availability
for (let new_user of new_users){
    if  (isUsernameTaken(new_user)){
    console.log(`The username "${new_user}" is already taken. Please choose a different one.`);
    }else {
        console.log(`The Username "${new_user}" is Available.`);
        
    }
}

 //----------------------------------------------------------------------

   //Question  Num 33

  //ordinal numbers
 let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

 for (let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    let ordinalEnding: string;

    if (numbers[i] === 1){
        ordinalEnding ="st";
    }else if (numbers[i] === 2){
        ordinalEnding ="nd";
    }else if (numbers[i] === 3){
        ordinalEnding = "rd"
    }else {
        ordinalEnding = "th";
    }

    console.log(`${numbers[i]}${ordinalEnding}`);
    
 }

  //----------------------------------------------------------------------

  //Question  Num 34

   //Pizza types array
let pizzas: string[] = ["Cheese", "BBQ Chicken", "Vegetable"];
console.log(pizzas);

console.log("\n");

for (let i = 0; i < pizzas.length; i++){
    console.log(`I like ${pizzas[i]} pizza.`);
}

console.log("\n");

console.log("I really love pizza!");


 //----------------------------------------------------------------------

  //Question  Num 35

   //three different animals that have a common characteristic
 let petAnimals: string[] = ["Buffalo", "Cow", "Goat"];

 for (let i = 0; i < petAnimals.length; i++){
      console.log(petAnimals[i]);
    
 }

  console.log("\n");

 for (let i = 0; i < petAnimals.length; i++) {
   console.log(`A ${petAnimals[i]} would make a great pet.`);
 }
 
   console.log("\n");
   
 console.log("Any of these animals would make a great pet!");
 

 //----------------------------------------------------------------------

  //Question  Num 36

   //T-Shirt: Write a function called make_shirt() 
  function make_shirt(size: string, message: string): void {
    console.log(`I'm making a ${size} T-shirt with the message "${message}"`);
  }

  make_shirt("Small", "BTS Lover!");


  //----------------------------------------------------------------------

  //Question  Num 37

   //Large Shirts:
  function makeShirt(size = "Large", message = "I love TypeScript!"):void{
      console.log(`I'm making a ${size} T-shirt with message "${message}"`);
     
 }

  makeShirt("large")
  makeShirt("Medium")
  makeShirt("Small")


 //----------------------------------------------------------------------

  //Question  Num 38

  function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
  }

  describe_city("Karachi");
  describe_city("Islamabad");
  describe_city("LA", "America");

  //----------------------------------------------------------------------

  //Question  Num 39

  function city_country(city: string, country: string): void {
    console.log(`"${city} , ${country}"`);
  }

  city_country("Karachi", "Pakistan");
  city_country("Islamabad", "Pakistan");
  city_country("LA", "America");


  //----------------------------------------------------------------------

  //Question  Num 40

  //music album
function makeAlbum(artist: string, title: string, tracks?:number): object{
   let Album: object = {
    artist: artist,
    title: title,
    // tracks: tracks
   };
   
   return Album;
}

//create three tracks one the optional track count

let Album1 = makeAlbum("Jungkook", "Golden", 11);
let Album2 = makeAlbum("Jungkook", "Seven", 9);
let Album3 = makeAlbum("BTS", "Love Yourself: Tear", 11);
console.log(Album1);
console.log(Album2);
console.log(Album3);

//----------------------------------------------------------------------

  //Question  Num 41

function show_magician(magicians: string[]): void {
  magicians.forEach((magicians) => {
    console.log(magicians);
  });
}

//Array of magician's names
let magicianName: string[] = [
  "Harry Houdini",
  "David Copperfield",
  "Penn Jillette",
  "Teller",
];

// Call the function to show magician's names
console.log(magicianName);
  
//----------------------------------------------------------------------

 //Question Num 42
  //defines the show_magicians
     function show_magicians(magicians: string[]):void{
       magicians.forEach(magician =>{
       console.log(magician);
     });
 }

 // Define the make_great function
     function makes_great(magicians: string[]): string[] {
 // Map over the array and add "the Great" to each magician's name
      return magicians.map((magician) => `The Great ${magician}`);
    }
   
 // Array of magician's names
  let magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

  magicianNames = makes_great(magicianNames);

  // Call the function to show magician's names
    show_magicians(magicianNames);

//----------------------------------------------------------------------

  //Question Num 43

//defines the show_magicians

  //Unchanged Magicians
// Define the original array of magician names
let magicians: string[] = ["Harry Houdini","David Copperfield","Penn Jillette","Teller"];

function make_great(names: string[]): string[] {
   let modifiedNames: string[] = [];
   for (let name of names){
    modifiedNames.push("Great "  +  name);
   }

    return modifiedNames;
}

// Create a copy of the original array
let originalMagicians: string[] = [...magicians];

// Call make_great() with a copy of the original array
let geatMagicians: string[] = make_great(originalMagicians);

console.log("originalMaicians", magicians);
console.log("Great Magicians", geatMagicians);


//----------------------------------------------------------------------

  //Question Num 44

  //Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 

  function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
    } else {
      console.log(" - items:" + items.join(", "));
    }
  }

  console.log("Enjoy your Sandwich.");

  // Call the function three times with different numbers of arguments
  orderSandwich("Ham", "Cheese", "Lettuce");
  orderSandwich("Turkey", "Tomato");
  orderSandwich("Peanut Butter", "Jelly", "Banana", "Honey");


//----------------------------------------------------------------------

  //Question Num 45

 //Cars: Write a function that stores information about a car in a Object. 

  type car = {
    manufacturer: string
    model: string
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, optional: Record<string, any>): car {
    return{
        manufacturer,
        model,
        ...optional
    }
}

const mycar: car = createCar("Mercedes", "Benz", {color: "Black", year: "2024"});
console.log(mycar);

