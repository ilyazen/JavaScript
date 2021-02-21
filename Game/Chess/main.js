const gameSettings = {
   cols: 10,
   rows: 10,
   container: document.querySelector(".main"),
   letters: ["a", "b", "c", "d", "e", "f", "g", "h"],
   numbers: [8, 7, 6, 5, 4, 3, 2, 1],
   heavyFigures: ["Л", "К", "С", "Ф", "КР", "С", "К", "Л"],
   lightFigures: ["п", "п", "п", "п", "п", "п", "п", "п"]
}
const game = {

   settings: gameSettings,

   render() {

      for (let i = 0; i < this.settings.rows; i++) {
         // Создаем новую строку.
         const row = document.createElement('div');
         row.className = "row rowForPlay";
         if (i === 0) {
            row.className = "row lettersUp letters";
         }
         if (i === this.settings.rows - 1) {
            row.className = "row lettersDown letters";
         }
         this.settings.container.appendChild(row);
         for (let j = 0; j < this.settings.cols; j++) {
            // Создаем ячейку.
            const cell = document.createElement('div');
            cell.className = "cell cellForPlay"
            if (j === 0) {
               cell.className = "cell numberLeft number";
            }
            if (j === this.settings.cols - 1) {
               cell.className = "cell numberRight number";
            }
            // Добавляем ячейку в текущую строку.
            row.appendChild(cell);
         }
      }

   },

   fillSideFields() {

      const fields = this.settings.container;
      const lettersUp = fields.querySelector(".lettersUp").querySelectorAll("div");
      const lettersDown = fields.querySelector(".lettersDown").querySelectorAll("div");
      const numberRight = fields.querySelectorAll(".numberRight");
      const numberLeft = fields.querySelectorAll(".numberLeft");


      for (let i = 1; i < lettersUp.length - 1; i++) {

         let index = i - 1;
         lettersUp[i].textContent = this.settings.letters[index];
         lettersDown[i].textContent = this.settings.letters[index];

         numberRight[i].textContent = this.settings.numbers[index];
         numberLeft[i].textContent = this.settings.numbers[index];
      }



   },
   fillFigure() {
      const rowForPlay = this.settings.container.querySelectorAll(".rowForPlay");
      const whiteCellOnRow1 = this.settings.container
         .querySelectorAll(".rowForPlay")[0]
         .querySelectorAll(".cellForPlay");
      const whiteCellOnRow2 = this.settings.container
         .querySelectorAll(".rowForPlay")[1]
         .querySelectorAll(".cellForPlay");
      const blackCellOnRow1 = this.settings.container
         .querySelectorAll(".rowForPlay")[rowForPlay.length - 1]
         .querySelectorAll(".cellForPlay");
      const blackCellOnRow2 = this.settings.container
         .querySelectorAll(".rowForPlay")[rowForPlay.length - 2]
         .querySelectorAll(".cellForPlay");


      for (let i = 0; i < whiteCellOnRow1.length; i++) {
         blackCellOnRow1[i].className += " black";
         blackCellOnRow2[i].className += " black";
         blackCellOnRow1[i].textContent = this.settings.heavyFigures[i];
         blackCellOnRow2[i].textContent = this.settings.lightFigures[i];

         whiteCellOnRow1[i].className += " white";
         whiteCellOnRow2[i].className += " white";
         whiteCellOnRow1[i].textContent = this.settings.heavyFigures[i];
         whiteCellOnRow2[i].textContent = this.settings.lightFigures[i];
      }

   },
   run() {
      this.render();
      this.fillSideFields();
      this.fillFigure();


   }


}
game.run()