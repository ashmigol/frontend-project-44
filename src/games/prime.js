import game from '../index.js';
import randomNum from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateRound = () => {
  const n = randomNum(1, 100);
  const question = `${n}`;
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

  let correctAnswer;

  if (checkPrimeNumber() === false) {
    correctAnswer = 'no';
  } else if (checkPrimeNumber() === true) {
    correctAnswer = 'yes';
  }
  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
