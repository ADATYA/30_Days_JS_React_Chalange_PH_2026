/* Question 5: Run Chase Commentator · 15 marks
Write an arrow function getChaseVerdict(target, scored, ballsLeft) for a cricket run chase.

Steps:

runsNeeded = target - scored

If runsNeeded is 0 or less, the match is already won → return "Won"

Otherwise, if ballsLeft is 0 or less, there is no ball left to score → return "Lost"

Otherwise, work out the required run rate:

requiredRate = (runsNeeded / ballsLeft) * 6
Pick the verdict from the rate:

Required rate	Verdict
6 or less	"Comfortable"
more than 6, up to 12	"Tough"
more than 12	"Almost Impossible"
Return this exact sentence:

Need <runsNeeded> runs in <ballsLeft> balls | <verdict>
Always write runs and balls, even when the number is 1.

Call	Returns
getChaseVerdict(200, 200, 12)	"Won"
getChaseVerdict(200, 190, 0)	"Lost"
getChaseVerdict(100, 90, 12)	"Need 10 runs in 12 balls | Comfortable"
getChaseVerdict(100, 80, 12)	"Need 20 runs in 12 balls | Tough"
getChaseVerdict(100, 70, 12)	"Need 30 runs in 12 balls | Almost Impossible"
getChaseVerdict(150, 149, 1)	"Need 1 runs in 1 balls | Comfortable"
Hint: use a template string for the sentence. Write it as const getChaseVerdict = (target, scored, ballsLeft) => { ... }; */

/**
 * ==============
 * SOLUTION CODES
 * ==============
 */

const getChaseVerdict = (target, scored, ballsLeft) => {
  const runsNeeded = target - scored;

  // 1. Match already won
  if (runsNeeded <= 0) {
    return "Won";
  }

  // 2. Out of balls
  if (ballsLeft <= 0) {
    return "Lost";
  }

  // 3. Calculate Required Run Rate (RRR per 6 balls / 1 over)
  const requiredRate = (runsNeeded / ballsLeft) * 6;

  // 4. Determine verdict based on required rate
  let verdict = "";
  if (requiredRate <= 6) {
    verdict = "Comfortable";
  } else if (requiredRate <= 12) {
    verdict = "Tough";
  } else {
    verdict = "Almost Impossible";
  }

  // 5. Construct output string using template literal
  return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};

// Test cases
console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));  
console.log(getChaseVerdict(100, 90, 12));  
console.log(getChaseVerdict(100, 80, 12));  
console.log(getChaseVerdict(100, 70, 12));  
console.log(getChaseVerdict(150, 149, 1));  

//Answers:
/* Won
Lost
Need 10 runs in 12 balls | Comfortable
Need 20 runs in 12 balls | Tough
Need 30 runs in 12 balls | Almost Impossible
Need 1 runs in 1 balls | Comfortable */