import readlineSync from "readline-sync";
import greeting from "./index.js";

export default () => {


  let name = "";
  const correctMessage = () => {
    console.log("Correct!");
    score += 1;
  };

  let score = 0;

  name = greeting();
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`);

  


for (let i = 0; i < 3; i += 1 ){
    let n = Math.floor(Math.random() * 101);
    let correctAnswer = "";
    const checkPrimeNumber = () => {
        if (n <= 1) {
          return false;
        }
        for (let i = 2; i <= Math.sqrt(n); i++) {
          if (n % i === 0) {
            return false;
          }
        }
        return true;
      };
      if (checkPrimeNumber() === false) {
        correctAnswer = "no";
      }
      else if (checkPrimeNumber() === true) {
        correctAnswer = "yes";
      }


    console.log(`Question: ${n}`);
    const userAnswer = readlineSync.question("Your answer: ");
    if (userAnswer === correctAnswer) {
        correctMessage();
        
    }
    else if (userAnswer !== correctAnswer) {
    console.log(
        `'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`
      );
      return; 
    } 

}
return console.log(`Congratulations, ${name}!`);
  
}