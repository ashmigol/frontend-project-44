import readlineSync from 'readline-sync';
import greeting from '../index.js';
import randomNum from '../utils.js';

export default () => {
  const progressArray = () => {
    const startNum = Math.floor(Math.random() * 10);
    const multiplier = Math.floor(Math.random() * 10);

    const progress = [startNum];

    for (let i = 0; i < 9; i += 1) {
      progress.push(startNum + (i + 1) * multiplier);
    }
    return progress;
  };

  const correctMessage = () => {
    console.log('Correct!');
  };

  const name = greeting();
  console.log('What number is missing in the progression?');

  for (let i = 1; i <= 3; i += 1) {
    const progress = progressArray();
    const randomValue = randomNum(10);
    const correctAnswer = progress[randomValue];
    progress[randomValue] = '..';
    console.log(`Question: ${progress.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      correctMessage();
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);

      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
