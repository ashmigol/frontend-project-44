import game from '../index.js';
import { getRandomIndex, getRandomNum } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '*', '-'];
const calculateAnswer = (num1, operator, num2) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Invalid operator: ${operator}`);
  }
};

const generateRound = () => {
  const num1 = getRandomNum(1, 100);
  const num2 = getRandomNum(1, 100);
  const operatorIndex = getRandomIndex(operators); 
  const operator = operators[operatorIndex]; 
  const question = `${num1} ${operator} ${num2}`;
  return [question, String(calculateAnswer(num1, operator, num2))];
};

export default () => {
  game(description, generateRound);
};
