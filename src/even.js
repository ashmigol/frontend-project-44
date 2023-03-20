import readlineSync from "readline-sync";
import greeting from "./index.js";

export default () => {
  let number = Math.floor(Math.random() * 101);
  let score = 0;
  let name = "";
  const answerArr = ["yes", "no"];

  console.log("Welcome to the Brain Games!");
  name = readlineSync.question("May I have your name? ");
  console.log(`Hello ${name}`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correctMessage = () => {
    console.log("Correct!");
    score += 1;
  };

  let i = 0;

  for (let i = 1; i <= 3; i += 1) {
    let number = Math.floor(Math.random() * 101);

    const question = readlineSync.question(`Question ${number}\n`);
    if (number % 2 === 0 && question === answerArr[1]) {
      console.log(
        `${question} is wrong answer ;(. Correct answer was ${answerArr[0]}.\nLet's try again, ${name}!`
      );
      return;
    } else if (number % 2 !== 0 && question === answerArr[0]) {
      console.log(
        `${question} is wrong answer ;(. Correct answer was ${answerArr[1]}.\nLet's try again, ${name}!`
      );
      return;
    } else if (question !== answerArr[0] && answerArr[1]) {
      console.log(
        `${question} is wrong answer ;(. Correct answer was ${answerArr[1]}.\nLet's try again, ${name}!`
      );
      return;
    } else {
      correctMessage();
    }
  }

  return console.log(`Congratulations, ${name}!`);
};
