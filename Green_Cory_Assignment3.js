// Cory Green
// Week 3, Scalable Data Infrastructures
// 2/14/2012
// Project: Band Practice


// create guitar object
var guitar = {
	brand: "Jackson",
	model: "Dinky",
	strings: "medium",
	numberOfStrings: 6,
	typeOfMusicMadeFor: ["hard rock", "metal", "neo-classical"],
	doesItRock: true,
	color: "blue",
	orientation: "right",
	
	
	// guitar object functions
	play: function(song)
		{	
			console.log("playing " + song);
		}

}
	
// Function for going to band practice
var goingToPractice = function()
{
	console.log("Every Monday at 5:30, I leave my house to go to band practice");
}

// displaying the band members! Return the member who is not here yet
// added a variable for return the member who is not here yet.

var bandPracticeMembers = function(bandMembers, notPresent)
{
	for (var i = 0, j = bandMembers.length; i < j; i++)
	{
		var members = bandMembers[i];
		console.log(members);
	}
	return bandMembers[notPresent];
}

// seing if I have a backup guitar in my car function.

var bringSecondGuitar = function(guitarYes, stringYes)
{
	var returnValue;
	if (guitarYes === true && stringYes === true)
	{
		returnValue = true;
	}
	else
	{
		returnValue = false;
	}
	return returnValue;
}



// main program
// global variables
var bandMemberArray = ["Travis", "Kenny", "Mike", "Cory"];
var bandMemberNotPresent = 2;
var guitarYes = true;
var stringYes = true;

// main program functions
goingToPractice();

// array function to output my bandmates
console.log("My band mates are ");

// array function return
console.log("Ive just been informed that " + bandPracticeMembers( bandMemberArray, bandMemberNotPresent )
			+ " will be late to practice.");
console.log("So we start to setup without him for the time being");

// call on the bring guitar function (boolean)
console.log("I have to go out to my car and see if I have another guitar and a set of strings to go with it");


// using if statement for the boolean function return
if(bringSecondGuitar(guitarYes, stringYes) === true)
{
	console.log("I do indeed have both an extra guitar and spare strings!");
}
else
{
	console.log("I dont have an extra guitar");
}

// manipulation of the guitar object
console.log("My main guitar is a " + guitar.brand +" " + guitar.model + ".");
console.log("While " + bandMemberArray[0] + '\'s is a ' 
					 + (guitar.brand = "PRS") + (guitar.model = " Torreno"));


