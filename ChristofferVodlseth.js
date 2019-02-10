//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

var kind="Dog";
var breed="Terrier";
var name="Rex";
function Animal (kind, breed, gender, name){
	this.species ={
		kind,breed
	};
	this.gender=gender; 
	this.name=name; 
}

Animal.prototype.greeting = function() {
  console.log("My animal is a" + this.species + "and it's name is" + this.name + ", it's a" + this.gender + '.');
};


//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbersArray=[1,2,3,4,5,6,7,8,9,10];
	
numbersArray.slice(4);


//3. Delete the last number in the array that you created above.
numbersArray.pop();

//4.Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
function FruitChange (){
	document.getElementById("p1").innerHTML.replace("strawberry","banana");
	document.getElementById("p1").innerHTML.replace("strawberries","bananas");
}

FruitChange();


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myArray = ["Rosenborg", "Brann", "Viking", "Lyn"];

footballToCars.addEventListener(
    'click',function(){
        delete myArray[0,1,2,3]; 
		myArray[0] = "Opel";
		myArray[1] = "Ferrari";
		myArray[2] = "Mercedes";
		myArray[3] = "Volvo";
		console.log(myArray);
    }
);

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var peopleArray =[
	{person:"Kim"},
	{person:"John"},
	{person:"Carl"},
];

var peopleFilter = peopleArray.filter(function(person){
    return(person === "Kim");
});

console.log(peopleFilter);

//7. Create a simple function that logs the date.
function dateLogger (){
	var date= new date();
	console.log(date);
};

dateLogger();

