const gameSettings = {

   question: {
      'Сколько букв в слове "привет"': {
         "a": "одна",
         "b": "две",
         "c": "три",
         "d": "шесть",
         "answer": "d"
      },
      'Сколько букв в слове "приве"': {
         "a": "одна",
         "b": "две",
         "c": "три",
         "d": "пять",
         "answer": "d"
      },
      'Сколько букв в слове "прив"': {
         "a": "одна",
         "b": "две",
         "c": "четыре",
         "d": "девять",
         "answer": "c"
      },

   }


};
const player = {
   score: 0,
   addScore() {
      this.score++;
   },
   subScore() {
      this.score--;
   },

};
const game = {

   settings: gameSettings,
   player: player,

   answerIsCorrect() {
      this.player.addScore();
   },
   answerIsWrong() {
      this.player.subScore();
   },
   sayScore() {
      alert(`Ваш счет:${this.player.score}`);
   },

   checkAnswer(userAnswer, correctAnswer) {
      if (userAnswer === "-1") {
         return -1;
      } else if (userAnswer !== correctAnswer) {
         this.answerIsWrong();

      } else {
         this.answerIsCorrect();

      }
   },
   doPlayAgain() {
      return prompt("Сыграть еще раз? 1 - Да, -1 - Выход")
   },
   run() {

      let question = this.settings.question;
      this.player.score = 0;

      for (let obj in question) {
         let sayQuestion = "Выберите правильный ответ: " + obj + "\n";
         let correctAnswer = "";
         let innerObj = question[`${obj}`];
         for (let val in innerObj) {
            let questionAnswer = innerObj[`${val}`];
            if (val != "answer") {
               sayQuestion += val + ") " + questionAnswer + "\n";
            } else {
               correctAnswer = questionAnswer;
            }
         }
         userAnswer = prompt(`${sayQuestion} \n или -1 чтобы выйти `);
         let check = this.checkAnswer(userAnswer, correctAnswer);
         if (check === -1) {
            this.sayScore();
            alert("Пока!")
            return;
         }
      }
      this.sayScore();
      let play = this.doPlayAgain();
      if (play === "1") {
         this.run()
      } else {
         alert("Пока!")
         return;
      }

   }


}

game.run();

