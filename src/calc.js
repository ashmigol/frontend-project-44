import readlineSync from 'readline-sync';

export default () => {
  let name = '';

  const correctMessage = () => {
    console.log('Correct!');
  };

  console.log('Welcome to the Brain Games!');
  name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);

  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const firstNumber = Math.floor(Math.random() * 101);
    const secondNumber = Math.floor(Math.random() * 101);
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

    const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
    console.log(question);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      correctMessage();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
