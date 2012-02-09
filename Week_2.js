
// Author: Cory Green
// Date: 02/06/2012
// Project: Week 2 - Me getting ready for the day.
// Class: Scalable Data Infrastructures


// variable declaration

var theCurrentTime = 1500, 
	numberOfBananas = 2;



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

// function used to see how many banana slices I can make for my cereal
// and to output "Keep slicing!" unless there are no more bananas!
var bananaSlices = function(numberOfBananas)
{
	var totalNumber = 0;
	var slicesPerBanana = 10;
	while ((numberOfBananas * slicesPerBanana) > totalNumber )
	{
		console.log("keep slicing bananas!");
		totalNumber++;
	}
	
return 0;
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
bananaSlices(numberOfBananas);			

/*
string function (2 string arguments to be passed)
{
	declare local variables;
	string concatenation;
	
	return string;
}

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
	
