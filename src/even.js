import readlineSync from 'readline-sync';
import greeting from './index.js';

export default () => {
  const name = greeting();
  const answerArr = ['yes', 'no',];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correctMessage = () => {
    let score = 0;
    console.log('Correct!');
    score += 1;
  };

  for (let i = 1; i <= 3; i += 1) {
    const number = Math.floor(Math.random() * 101);
    const question = readlineSync.question(`Question: ${number}\n`);

    if (number % 2 === 0 && question === answerArr[1]) {
      console.log(
        `${question} is wrong answer ;(. Correct answer was ${answerArr[0]}.\nLet's try again, ${name}!`
      );
      return;
    }

    if (number % 2 !== 0 && question === answerArr[0]) {
      console.log(
        `${question} is wrong answer ;(. Correct answer was ${answerArr[1]}.\nLet's try again, ${name}!`
      );
      return;
    }

    if (question !== answerArr[0] && question !== answerArr[1]) {
      console.log(
        `${question} is wrong answer ;(. Correct answer was ${answerArr[1]}.\nLet's try again, ${name}!`
      );
      return;
    }

    correctMessage();
  }

  console.log(`Congratulations, ${name}!`);
};