import game from '../index.js';
import { randomNum } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (n) => {
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

const generateRound = () => {
  const n = randomNum(1, 100);
  const question = n;
  const correctAnswer = isPrime(n) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  game(description, generateRound);
};
