const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let questionBank = [
  "What do you think of Node.js?",
  "What's your preferred name?",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "What's your favourite meal? (dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What are you amazing at?"
];

let answerBank = [];
// let i = 0;

// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.
const printAnswers = function() {
  // console.log('inside printAnswers')
  process.stdout.write(`${answerBank[1]} likes listening to ${answerBank[3]} while ${answerBank[2]} and thinks Node.js is ${answerBank[0]}. ${answerBank[1]} likes to eat ${answerBank[5]} at ${answerBank[4]} while playing ${answerBank[6]} and being amazing at ${answerBank[7]}.\n`);
};

const askQuestions = function(arr, qNum) {
  // base case is qNum === 7
  rl.question(arr[qNum] + " ", (answer) => {
    if (qNum >= arr.length - 1) {
      // console.log('before printAnswers()')
      // console.log('answerBank', answerBank)
      answerBank[qNum] = answer;
      printAnswers();
      return rl.close();
    }
    answerBank[qNum] = answer;
    // console.log('qNum', qNum);
    askQuestions(arr, ++qNum);
  })
}

askQuestions(questionBank, 0);