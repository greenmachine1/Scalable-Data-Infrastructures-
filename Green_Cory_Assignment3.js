// Cory Green
// Week 3, Scalable Data Infrastructures
// 2/14/2012
// Project: Band Practice


// create guitar object
var guitar = {
	brand: "Jackson",
	model: "Dinky",
	strings: "medium",
	typeOfMusicMadeFor: ["hard rock" , " metal" ," and neo-classical."],
	doesItRock: true,
	hum: true,
	
	
// guitar object functions
	play: function(song)
		{	
			console.log("We will be playing " + song);
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


// how many times we need to practice a song with the time we have left.
var practiceSong = function(time)
{	
	var timeToStop = 1755;
	var count = 0;
	while(time < timeToStop)
	{
		console.log("play it again!");
		time += 5;
		count++;
	}
	return count;
}

var endingWords = function(string1, string2)
{
	return string1 + string2;
}

// guitar humming function with access to object variable
var guitarHumming = function(guitarHumObject)
{
	if (guitarHumObject === true)
	{
		console.log("My guitar is humming because of the high gain of my amp!");
	}
	else
	{
		console.log("I must have my amp gain low because my guitar is not humming!");
	}
}

// json data
var upcomingShows = function (json)
{
	for (var i = 0; i < json.shows.length; i++)
	{
		var show = json.shows[i];
		console.log("venue: " + show.venue + " show: " + show.show + " date: " +
		show.date);
	}
}

// main program
// global variables
var bandMemberArray = ["Travis", "Kenny", "Mike", "and myself"],
 	bandMemberNotPresent = 2,
 	guitarYes = true,
 	stringYes = false,
 	nameOfSong = "Summer song",
 	time = 1725,
 	travisWords = "Great practice guys!",
 	coryWords = " Yeah, I had a great time!";
 	
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

// manipulation of the guitar object - accessor and mutator
console.log("My main guitar is a " + guitar.brand +" " + guitar.model + ".");
console.log("While " + bandMemberArray[0] + '\'s is a ' 
					 + (guitar.brand = "PRS") + (guitar.model = " Torreno"));

// outputting the types of music these guitars are made for
console.log("The types of music that both of these guitars are made for are " + guitar.typeOfMusicMadeFor);

//calling on guitar hum function with guitar.hum object as argument
guitarHumming(guitar.hum);

// outputting what type of song we are to play
guitar.play(nameOfSong) + console.log("Once our singer gets back");

// using a loop to output how many times we had to play this song
console.log(practiceSong(time) +  " times we played this song before it was time to leave!");

console.log("Before we all leave, we should talk about upcoming shows");

// upcoming shows feed
upcomingShows(json);

console.log(endingWords(travisWords, coryWords));