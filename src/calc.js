import readlineSync from 'readline-sync';

export default () => {
  let score = 0;
  let name = '';

  const correctMessage = () => {
    console.log('Correct!');
    score += 1;
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

    const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;
    const correctAnswer = eval(question);
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

