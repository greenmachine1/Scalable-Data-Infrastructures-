/*  Author : Cory Green
	Date : 02/19/2012
	Class : Scalable Data Infrastructures
	Project : Week 4
	
*/
// find the number of hours or days difference between two dates
// setup a function to hold to arguments and find their differences

// comment, use the day of the month as a multiplier.
// exe january = 1, feb = 2.. etc
// so if you have 30 days in the month, use feb as a multiplier of 2 for a total of + 60 days.

/*var differenceDate = function(firstDate, secondDate)
{
	// this function needs to take the two days passed to it and find the difference.
	
	var 
}
*/



// url checking function
var checkString = function(url)
{

	if (url.substring(0,5) === "http:" || url.substring(0, 6) === "https:")
	{
		console.log("This is the correct format!");
	}
	else
	{
		console.log("This is not the correct format");
	}
	
}
var myUrl = "https://hello.com";
var myUrl1 = "http//hello.com";
var myUrl2 = "http://hello.com";

checkString(myUrl);
checkString(myUrl1);
checkString(myUrl2);




/* objectives - Does a string follow a 123-456-7890 pattern like a phone number?

				Does a string follow an aaa@bbb.ccc pattern like an email address?
				
				Is the string a URL? (Does it start with http: or https:?)
				
				Title-case a string (split into words, then uppercase the first letter of each word)
				Given a string that is a list of things separated by a given string, as well as another 
				string separator, return a string with the first separator changed to the second: "a,b,c" 
				+ "," + "/" → "a/b/c".
				
				Format a number to use a specific number of decimal places, as for money: 2.1 → 2.10
				
				Fuzzy-match a number: is the number above or below a number within a certain percent?
				
				Find the number of hours or days difference between two dates.
				
				Given a string version of a number such as "42", return the value as an actual Number, such as 42.
				
				Find the smallest value in an array that is greater than a given number
				
				Find the total value of just the numbers in an array, even if some of the items are not numbers.
				
				Given an array of objects and the name of a key, return the array sorted by the value of that key 
				in each of the objects: "a" + [{a:2},{a:3},{a:1}] → [{a:1},{a:2},{a:3}].
				
*/




