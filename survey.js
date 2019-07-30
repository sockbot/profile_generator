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
let i = 0;

// Devani loves listening to Ludovico Einaudi while coding, devouring Yak Momos for brunch, prefers Tennis over any other sport, and is amazing at dropping mad puns at inopportune times.
const printAnswers = function() {
  process.stdout.write(`${answerBank[1]} likes listening to ${answerBank[3]} while ${answerBank[2]} and thinks Node.js is ${answerBank[0]}. ${answerBank[1]} likes to eat ${answerBank[5]} at ${answerBank[4]} while playing ${answerBank[6]} and being amazing at ${answerBank[7]}.`);
};

rl.question(questionBank[i] + ' ', (answer) => {
  answerBank[i] = answer;
  // console.log('questionBank[i]', questionBank[i]);
  // console.log('answerBank[i]', answerBank[i]);
  i++;
  rl.question(questionBank[i] + ' ', (answer) => {
    answerBank[i] = answer;
    // console.log('questionBank[i]', questionBank[i]);
    // console.log('answerBank[i]', answerBank[i]);
    i++;
    rl.question(questionBank[i] + ' ', (answer) => {
      answerBank[i] = answer;
      // console.log('questionBank[i]', questionBank[i]);
      // console.log('answerBank[i]', answerBank[i]);
      i++;
      rl.question(questionBank[i] + ' ', (answer) => {
        answerBank[i] = answer;
        // console.log('questionBank[i]', questionBank[i]);
        // console.log('answerBank[i]', answerBank[i]);
        i++;
        rl.question(questionBank[i] + ' ', (answer) => {
          answerBank[i] = answer;
          // console.log('questionBank[i]', questionBank[i]);
          // console.log('answerBank[i]', answerBank[i]);
          i++;
          rl.question(questionBank[i] + ' ', (answer) => {
            answerBank[i] = answer;
            // console.log('questionBank[i]', questionBank[i]);
            // console.log('answerBank[i]', answerBank[i]);
            i++;
            rl.question(questionBank[i] + ' ', (answer) => {
              answerBank[i] = answer;
              // console.log('questionBank[i]', questionBank[i]);
              // console.log('answerBank[i]', answerBank[i]);
              i++;
              rl.question(questionBank[i] + ' ', (answer) => {
                answerBank[i] = answer;
                // console.log('questionBank[i]', questionBank[i]);
                // console.log('answerBank[i]', answerBank[i]);
                printAnswers();
                rl.close();
              });
            });
          });
        });
      });
    });
  });
});

// const saveAnswer = function(answer) {
//   answerBank[i] = answer;
//   if (i >= answerBank.length) {
//     printAnswers();
//     rl.close();
//   }
//   i++;
//   saveAnswer()
// }