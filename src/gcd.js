import readlineSync from 'readline-sync';
import greeting from './index.js';

export default () => {
  let name = '';

  const correctMessage = () => {
    console.log('Correct!');
  };

  const correctAnswer = (a, b) => {
    const min = Math.min(a, b);
    let result = 1;
    for (let i = 2; i <= min; i += 1) {
      if (a % i === 0 && b % i === 0) {
        result = i;
      }
    }
    return result;
  };

  name = greeting();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 1001 + 1);
    const secondNumber = Math.floor(Math.random() * 1001 + 1);
    console.log(`Question: ${firstNumber} ${secondNumber}`);

    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer(firstNumber, secondNumber)) {
      correctMessage();
    } else {
      console.log( `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer(firstNumber,secondNumber)}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
