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
	if (phoneNumber.substring(3, 4) === "-" && phoneNumber.substring(7, 8) === "-")
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

var differenceInDate = function(firstDate, secondDate)
{
	console.log(firstDate + " " + secondDate);
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







var myUrl = "https://hello.com";
var myUrl1 = "http//hello.com";
var myUrl2 = "http://hello.com";

var myPhone = "586-332-0001";
var myPhone1 = "22123-45121";
var myPhone2 = "221-4444443";

var firstDate = "March 21";
var secondDate = "May 2";

console.log(checkStringUrl(myUrl));
console.log(checkStringUrl(myUrl1));
console.log(checkStringUrl(myUrl2));

console.log(checkPhoneNumber(myPhone));
console.log(checkPhoneNumber(myPhone1));
console.log(checkPhoneNumber(myPhone2));

console.log(checkEmailAddress("Thingy_shouldnt_Be@hotmail.com"));
console.log(checkEmailAddress("Thingy_shouldyahoo.com"));
console.log(checkEmailAddress("This_is_not_An_email@this"));


console.log(titleCase("hello there!"));
console.log(titleCase("hi amanda!"));
console.log(titleCase("no other"));




/* objectives - Done! Does a string follow a 123-456-7890 pattern like a phone number?

				Done! Does a string follow an aaa@bbb.ccc pattern like an email address?
				
				Done! Is the string a URL? (Does it start with http: or https:?)
				
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




