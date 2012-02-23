/*  Author : Cory Green
	Date : 02/19/2012
	Class : Scalable Data Infrastructures
	Project : Week 4
*/
java.util.Arrays;

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
	
	/*console.log(dotCom);			 						// displays the dotCom number
	console.log(eMail.length + " " + eMail);				// displays the length + the email given
	*/
	
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









// function used to tell the difference between 2 days
// 4 (april) 21 and 5 (may) 18
/*var differenceInDate = function(firstMonth, firstDay, secondMonth, secondDay)
{
	var monthName = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
					 "Ocbober", "November", "December"];
	var daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	
	var userMonth1 = firstMonth - 1;
	var userMonth2 = secondMonth - 1;
	
	var monthsInBetween = (userMonth2 - userMonth1) - 1;			// 0
	var theMonthInBetweensValues = daysInMonths[monthsInBetween];		// 5 + 0 = 5
	
	// variables to hold the amount of days left in the month after the day inputed from the user
	var daysInThatMonthLeft1 = daysInMonths[userMonth1] - firstDay;
	var daysInThatMonthLeft2 = daysInMonths[userMonth2] - secondDay;
	
	var daysInBetween = daysInThatMonthLeft1 + daysInThatMonthLeft2;
	
	console.log(daysInThatMonthLeft1);
	console.log(daysInThatMonthLeft2);
	
	
	console.log(daysInBetween + monthsInBetween);
	console.log(monthsInBetween);
	console.log(theMonthInBetweensValues);
	
	

}
*/
// 9, 7, 10, 90, 100, 2134
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
	if(arraySet[2] < cache)
	{
		cache = arraySet[2];
	}
	else 
	{
		cache = cache;
	}
	if(arraySet[3] < cache)
	{
		cache = arraySet[3];
	}
	else
	{
		cache = cache;
	}
	if(arraySet[4] < cache)
	{
		cache = arraySet[4];
	}
	else
	{
		cache = cache;
	}
	if(arraySet[5] < cache)
	{
		cache = arraySet[5];
	}
	else
	{
		cache = cache;
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


var myUrl = "https://hello.com";
var myUrl1 = "http//hello.com";
var myUrl2 = "http://hello.com";

var myPhone = "586-332-0001";
var myPhone1 = "22123-45121";
var myPhone2 = "221-4444443";

var firstMonth = 4;
var secondMonth = 5;
var firstDay = 21;
var secondDay = 18;


var myArray = [9, 7, 10, 90, 100, 2134];

console.log(checkStringUrl(myUrl));
console.log(checkStringUrl(myUrl1));
console.log(checkStringUrl(myUrl2));

console.log(checkPhoneNumber(myPhone));
console.log(checkPhoneNumber(myPhone1));
console.log(checkPhoneNumber(myPhone2));

console.log(checkEmailAddress("Thingy_shouldnt_Be@hotmail.com"));
console.log(checkEmailAddress("Thingy_shouldyahoo.com"));
console.log(checkEmailAddress("This_is_not_An_email@this"));

//differenceInDate(firstMonth, firstDay, secondMonth, secondDay);

console.log(titleCase("hello there!"));
console.log(titleCase("hi amanda!"));
console.log(titleCase("no other"));

console.log(totalNumberOfArray(myArray));

console.log(smallestNumberInArray(myArray));



/* objectives - Done! Does a string follow a 123-456-7890 pattern like a phone number?

				Done! Does a string follow an aaa@bbb.ccc pattern like an email address?
				
				Done! Is the string a URL? (Does it start with http: or https:?)
				
				Done! Title-case a string (split into words, then uppercase the first letter of each word)
				
				Given a string that is a list of things separated by a given string, as well as another 
				string separator, return a string with the first separator changed to the second: "a,b,c" 
				+ "," + "/" → "a/b/c".
				
				Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
				
				Fuzzy-match a number: is the number above or below a number within a certain percent?
				
				Find the number of hours or days difference between two dates.
				
				Given a string version of a number such as "42", return the value as an actual Number, such as 42.
				
				Find the smallest value in an array that is greater than a given number
				
				Done! Find the total value of just the numbers in an array, even if some of the items are not numbers.
				
				Given an array of objects and the name of a key, return the array sorted by the value of that key 
				in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
				
*/




