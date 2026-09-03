/* Question 3: Username Gatekeeper · 10 marks
Write a function validateUsername that takes a username and checks it against these rules, in this order:

Shorter than 4 characters → return "Too Short"
Contains a space → return "No Space Allowed"
Contains the word admin anywhere, in any letter case → return "Reserved Word"
Otherwise → return "Available"
The order matters. Look at the third example carefully.

Call	Returns	Why
validateUsername("rahim123")	"Available"	passes every rule
validateUsername("ab")	"Too Short"	only 2 characters
validateUsername("a b")	"Too Short"	it has a space, but the length rule is checked first
validateUsername("abcd")	"Available"	exactly 4 is allowed
validateUsername("rahim islam")	"No Space Allowed"	
validateUsername("superadmin99")	"Reserved Word"	admin is in the middle
validateUsername("Admin_Rahim")	"Reserved Word"	capital A must also be caught
Hint: .length, .includes(), and .toLowerCase(). */

/**
 * ==============
 * SOLUTION CODES
 * ==============
 */

function validateUsername(username){
    if(username.length < 4){
        return "Too Sort"
    }

    if(username.includes("")){
        return "No Space Allowed";
    }

    if(username.toLowerCase().includes("admin")){
        return "Reserved Word";
    }

    return "Available";
}


//output:

// Test cases
console.log(validateUsername("bikrom123"));    
console.log(validateUsername("s b"));          
console.log(validateUsername("s b"));         
console.log(validateUsername("abcd"));        
console.log(validateUsername("bikrom adatya roy")); 
console.log(validateUsername("adiisadmin73"));
console.log(validateUsername("Bikrom_Roy")); 

//Answers: 
/* 
No Space Allowed
Too Sort
Too Sort
No Space Allowed
No Space Allowed
No Space Allowed
No Space Allowed */
