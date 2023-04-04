import readlineSync from 'readline-sync';
import greeting from './index.js';

export default () => {
  const progressArray = () => {
    let startNum = Math.floor(Math.random() * 10);
    let multiplier = Math.floor(Math.random() * 10);

    let progress = [startNum];

    for (let i = 0; i < 9; i++) {
      startNum = startNum + multiplier;
      progress.push(startNum);
    }
    return progress;
  };
  let name = '';
  const correctMessage = () => {
    console.log('Correct!');
    score += 1;
  };

  let score = 0;

  name = greeting();
  console.log(`What number is missing in the progression?`);
  for (let i = 1; i <= 3; i += 1) {
    let progress = progressArray();
    let randomValue = Math.floor(Math.random() * 10);
    let correctAnswer = 0;
    correctAnswer = progress[randomValue];
    progress[randomValue] = '..';
    console.log(`Question: ${progress.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      correctMessage();
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`
      );
      return;
    }
  }
  return console.log(`Congratulations, ${name}!`);
};
