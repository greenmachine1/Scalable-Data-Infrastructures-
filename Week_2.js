
// Author: Cory Green
// Date: 02/06/2012
// Project: Week 2 - Me getting ready for the day.
// Class: Scalable Data Infrastructures


// variable declaration

var theCurrentTime = 1500, 
	numberOfMinutes = 10;
	
var amandaConversation1 = "Is the coffee ready? ",
	amandaConversation2 = "I have to leave here in 10 minutes!";



// First function asks if my cat scooter has jumped on me to wake me up
// If he has, then it must be time to wake up
// If not then I have a few more hours left to sleep
var getOutOfBed = function (scooter)
{
	if (scooter === true)
	{
		console.log("Alright, alright, it must be that time to get out of bed!");
	}
	else
	{
		console.log("Well, my cat isnt on me, so I have a few more hours left" +
		" to sleep.");
	}
}

// Function used to see if I still have time to eat before work. 
// since it is only 1500 and I leave for work at 1515, I do have time.
var timeToGetReady = function(time)
{
	var outcome;
	var timeToLeaveForWork = 1515;
	
	if (timeToLeaveForWork > time)
	{	
		outcome = true;
	}
	else
	{
		outcome = false;
	}
	return outcome;	
}

// Brew coffee function.  Basically check on coffee every 2 minutes then count
// how many times I checked on it in that amount of time!
var brewCoffee = function(minutes)
{
	var total;
	var count = 2;
	
	while (minutes >= count)
	{
		console.log("Checked on Coffee at " + count + " minutes");
		count = count + 2;
		total = (count / 2) - 1;
		
	}
	return total;
}

// My wife talking about her having to leave in 10 minutes!
var conversation = function(first, second)
{
	var middle = "Because "
	var stringTotalConversation = first + middle + second;
	return stringTotalConversation;
}

// main line of code, where all functions get called from and return to.
getOutOfBed(true);
console.log("I work at 1600 hours");
console.log("Do I still have time to eat something before work " +
			"since its " + theCurrentTime + " hours?");
			
// using if statements, im able to actually do something with the 
// boolean return of the timeToGetReady function.
	if (timeToGetReady(theCurrentTime) === true)
	{
		console.log("Yes I do!");
	}
	else
	{
		console.log("Oh no! I have to leave right now!");
	}
console.log(brewCoffee(numberOfMinutes));	

console.log(conversation(amandaConversation1, amandaConversation2));


/*

array function ( 1 number and 1 array to be passed in)
{
	for loop;
	{
		do some math;
		output that math;
	}
	return array values;
}

*/
	
