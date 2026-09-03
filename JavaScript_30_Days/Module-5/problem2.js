/*  Question 2: Bangladesh Weekend Machine · 10 marks
Write a function getDayType that takes a day name and returns:

Input day	Returns
Friday, Saturday	"Weekend"
Sunday, Monday, Tuesday, Wednesday, Thursday	"Working Day"
anything else	"Invalid Day"
You must solve this with switch case, not with if / else.

It must also work when the student enters the day in any letter case:

Call	Returns
getDayType("Friday")	"Weekend"
getDayType("friday")	"Weekend"
getDayType("MONDAY")	"Working Day"
getDayType("Bandarban")	"Invalid Day"
Hint: two case lines can share one result if you do not put break between them. And a string method can fix the letter case before the switch starts.

*/

/**
 * ==============
 * SOLUTION CODES
 * ==============
 */

function getDayType(day) {
  // Convert input to lower case to handle any casing (e.g., "Friday", "FRIDAY", "friday")

  const normalizedDay = day.toLowerCase();

  switch (normalizedDay) {
    case "friday":
    case "saturday":
      return "Weekend";

    case "sunday":
    case "monday":
    case "tuesday":
    case "wednesday":
    case "thursday":
      return "Working Day";

    default:
      return "Invalid Day";
  }
}

// Test cases
console.log(getDayType("Friday"));  // "Weekend"
console.log(getDayType("friday"));   // "Weekend"
console.log(getDayType("MONDAY"));   // "Working Day"
console.log(getDayType("Bandarban"));  // "Invalid Day"

//Answers:
/* Weekend
Weekend
Working Day
Invalid Day */