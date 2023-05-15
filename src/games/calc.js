import randomNum from '../utils.js';
import game from '../index.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const firstNumber = randomNum(1, 100);
  const secondNumber = randomNum(1, 100);
  let operator;
  const randomNumber = Math.random();
  if (randomNumber < 0.33) {
    operator = '+';
  } else if (randomNumber < 0.66) {
operator = '*';
  } else {
    operator = '-';
  }

  let correctAnswer;

  if (operator === '+') {
    correctAnswer = firstNumber + secondNumber;
  } else if (operator === '-') {
    correctAnswer = firstNumber - secondNumber;
  } else {
    correctAnswer = firstNumber * secondNumber;
  }

  const question = `${firstNumber} ${operator} ${secondNumber}`;
  return [question, String(correctAnswer)];
};

export default () => {
  game(description, generateRound);
};
