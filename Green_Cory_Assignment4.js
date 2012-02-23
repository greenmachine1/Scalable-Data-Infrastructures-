/*  Author : Cory Green
	Date : 02/19/2012
	Class : Scalable Data Infrastructures
	Project : Week 4
*/


// url checking function
var checkStringUrl = function(url)
{

	if (url.substring(0,5) === "http:" || url.substring(0, 6) === "https:")
	{
		return true;
	}
	else
	{
		return false;
	}
	
}

// phone number checking program
var checkPhoneNumber = function(phoneNumber) 
{
	if ((phoneNumber.substring(3, 4) === "-") && (phoneNumber.substring(7, 8) === "-"))
	{
		return true;
	} 
	else 
	{
		return false;
	}
}


// function used to check whether or not an email has the correct .com ending
var checkEmailAddress = function(eMail)
{
	var dotCom = (eMail.length - 4); 						// used to hold the length of the string minus 4 for the .com ending
	
	// decides whether or not the email has the required "." and also if the email has @.
	// email.indexOf("@") means to look for the @ sign and if it is not there, to return -1
	if ((eMail.substring(dotCom, (dotCom + 1)) === ".") && (eMail.indexOf("@") !== -1))				
	{	
		return true;
	}
	else
	{
		return false;
	}
	
}



// find the smallest number in an array
var smallestNumberInArray = function(arraySet, number)
{
	var cache;									
	if(arraySet[0] < arraySet[1])
	{
		cache = arraySet[0];
	}
	else
	{
		cache = arraySet[1];
	}
	for(i = 2, j = arraySet.length; i < j; i++) // running through the array
	{
		if(arraySet[i] < cache)
		{
			cache = arraySet[i];
		}
		else 
		{
			cache = cache;
		}
	}
	return cache;
}

// splitting a string then uppercasing the words
// indexOf finds the index of a perticular character, whitespace in this case.
// toUpperCase converts the letter to an uppercase letter.
var titleCase = function(mainString)
{
	// used to detect the whitespace of the string.
	var space = mainString.indexOf(" ");
	
	// used to store the first word in the string and uppercase the first letter
	var upperFirst = (mainString.substring(0,1).toUpperCase() + mainString.substring(1, space));
	
	// used to store the second word in the string and uppercase the first letter
	var upperSecond = (mainString.substring(space + 1, space + 2).toUpperCase() 
					   + mainString.substring(space + 2, mainString.length));
	
	// returns the two words plus a white space in between.
	return upperFirst + " " + upperSecond;
}

// function used to add together all the elements in an array and return them
var totalNumberOfArray = function(arrayNumbers)
{
	var total = 0;
	for(var i = 0, j = arrayNumbers.length; i < j; i++)
	{
		total += arrayNumbers[i];
	}
	return total;
}







				





