// Cory Green
// Week 3, Scalable Data Infrastructures
// 2/14/2012
// Project: Band Practice


// creat guitar object
var guitar = {
	brand: "Jackson",
	strings: "medium",
	color: "blue",
	orientation: "right",
	
	play: function(song)
		{	
			console.log("playing a song");
		}
}
	


// Function for going to band practice
var goingToPractice = function()
{
	console.log("Every Monday at 5:30, I leave my house to go to bandpractice");
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

var bringSecondGuitar = function(answer)
{
	var returnValue;
	if (answer === true)
	{
		returnValue = 1;
	}
	else
	{
		returnValue = 0;
	}
	return returnValue;
}



// main program
// global variables
var bandMemberArray = ["Travis", "Kenny", "Mike", "Cory"];
var bandMemberNotPresent = 2;
var backUp = true;

// main program functions
goingToPractice();
console.log("My band mates are ");
console.log("Ive just been informed that " + bandPracticeMembers( bandMemberArray, bandMemberNotPresent )
			+ " will be late to practice.");
console.log("So we start to setup without him for the time being");

console.log("I have to go out to my car's trunk to check how many backup guitars I have " +
			"for practice today");
			
console.log( "I do indeed have " + bringSecondGuitar( backUp ) + " guitar as a backup for practice");
