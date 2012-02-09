// Start of actual project
// Author: Cory Green
// Date: 02/06/2012
// Project: Week 2
// Class: Scalable Data Infrastructures

// Project has a main function in which all the functions will come back to an return
// a data type or do something.
// Will start with pseudocode that will actually get filled afterwards
// Project is me getting out of bed and working towards the rest of my day.



var theCurrentTime = 1500;



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

// Function used to see if I still have time to get ready for work 
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



/*
number function ( one argument to be passed )
{
	declare local variables;
	while (something is true)
	{
		do some math;
		output some text;
	}
	
return a value;
}
*/


// main line of code, where all functions get called from and return to.
getOutOfBed(true);
console.log("Do I still have time to get ready for work " +
			"Since its only " + theCurrentTime + "?");
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
	
