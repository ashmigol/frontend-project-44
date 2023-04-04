import readlineSync from 'readline-sync';
import greeting from './index.js';

export default () => {
  let name = '';
  let score = 0;

  const correctMessage = () => {
    console.log('Correct!');
    score += 1;
  };

  name = greeting();
  console.log('Answer \'yes\' if given number is prime. Otherwise answer \'no\'.');

  for (let j = 0; j < 3; j += 1) {
    const n = Math.floor(Math.random() * 101);
    let correctAnswer = '';
    const checkPrimeNumber = () => {
      if (n <= 1) {
        return false;
      }
      for (let i = 2; i <= Math.sqrt(n); i += 1) {
        if (n % i === 0) {
          return false;
        }
      }
      return true;
    };
    if (checkPrimeNumber() === false) {
      correctAnswer = 'no';
    } else if (checkPrimeNumber() === true) {
      correctAnswer = 'yes';
    }

    console.log(`Question: ${n}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === correctAnswer) {
      correctMessage();
    } else {
      console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
