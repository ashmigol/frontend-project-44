import game from '../index.js';
import {arrayChoise, randomNum} from '../utils.js';

const description = 'What is the result of the expression?';
const operatorArray = ['+', '*', '-'];

const generateRound = () => {
  const num1 = randomNum(1, 100);
  const num2 = randomNum(1, 100);
  let operator;
  operator = arrayChoise(operatorArray);
  const answer = (num1, operator, num2) => {
    let correctAnswer;
    switch (operator) {
      case '+':
        correctAnswer = num1 + num2;
        break;
      case '-':
        correctAnswer = num1 - num2;
        break;
      case '*':
        correctAnswer = num1 * num2;
        break;
      default:
        throw new Error(`Invalid operator: ${operator}`);
    }
    return correctAnswer;
  };
  const question = `${num1} ${operator} ${num2}`;
  return [question, String(answer(num1, operator, num2))];
};

export default () => {
  game(description, generateRound);
};
