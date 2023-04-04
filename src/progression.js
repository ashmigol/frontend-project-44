import readlineSync from 'readline-sync';
import greeting from './index.js';

export default () => {
  const progressArray = () => {
    const startNum = Math.floor(Math.random() * 10);
    const multiplier = Math.floor(Math.random() * 10);

    const progress = [startNum];

    for (let i = 0; i < 9; i++) {
      progress.push((startNum + (i + 1) * multiplier));
    }
    return progress;
  };
  
  const correctMessage = () => {
    console.log('Correct!');
  };

  const name = greeting();
  console.log(`What number is missing in the progression?`);
  let score = 0;
  
  for (let i = 1; i <= 3; i++) {
    const progress = progressArray();
    const randomValue = Math.floor(Math.random() * 10);
    const correctAnswer = progress[randomValue];
    progress[randomValue] = '..';
    console.log(`Question: ${progress.join(' ')}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === correctAnswer) {
      correctMessage();
      score += 1;
    } else {
      console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\n Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
