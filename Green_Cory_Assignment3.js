// Cory Green
// Week 3, Scalable Data Infrastructures
// 2/14/2012
// Project: Band Practice



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


// main program
var bandMemberArray = ["Travis", "Kenny", "Mike", "Cory"];
var bandMemberNotPresent = 2;

goingToPractice();
console.log("My band mates are ");
console.log("But " + bandPracticeMembers(bandMemberArray, bandMemberNotPresent)
			+ " is not here yet");















/*
// making object ball
var ball = { 
	size: 10, 
	color: "red", 
	lettering: "Green",
	
	sayHi: function ()
	{
		console.log("Hello!");
	}
};

console.log(ball.size);
console.log(ball.color);
console.log(ball.lettering);
console.log(ball.size * 3.1);



ball.sayHi();
*/