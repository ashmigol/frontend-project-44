import readlineSync from 'readline-sync';
import greeting from '../index.js';
import randomNum from '../utils.js';

export default () => {
  const name = greeting();
  const answerArr = ['yes', 'no'];

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const correctMessage = () => { console.log('Correct!'); };

  for (let i = 1; i <= 3; i += 1) {
    const number = randomNum();
    const question = readlineSync.question(`Question: ${number}\n`);

    if (number % 2 === 0 && question === answerArr[1]) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answerArr[0]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (number % 2 !== 0 && question === answerArr[0]) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answerArr[0]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    if (question !== answerArr[0] && question !== answerArr[1]) {
      console.log(`${question} is wrong answer ;(. Correct answer was ${answerArr[0]}.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    correctMessage();
  }

  console.log(`Congratulations, ${name}!`);
};
