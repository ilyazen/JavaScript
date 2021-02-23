const settings = {
   player1: "X",
   player2: "O",

   status: "game",
   current: 0,
   defaultField:[
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
   ],
   currentField: [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
   ],
   fieldClass: ".field",
   mainClass: ".main",

};
const game = {

   settings,

   //метод запускающий игру
   run(e) {
      // получаем поле
      this.settings.currentField = this.getNewField(e);
      // проверяем победителя
      let hasWinner = this.IsWinner();
      if (hasWinner[0]) {
         alert(`Победитель ${hasWinner[1]}`)
         // обнуляем доску
         this.settings.currentField = this.settings.defaultField;
      }
      //рисуем поле
      this.render();
   },

   //рисуем поле
   render() {
      document.querySelector(this.settings.fieldClass).remove();
      const main = document.querySelector(this.settings.mainClass);
      const field = document.createElement('div');
      field.className = "field";
      main.appendChild(field);
      // создаем и добавляем поле на страницу
      for (let i = 0; i < this.settings.currentField.length; i++) {
         //создаем row
         const row = document.createElement('div');
         row.className = "row";
         field.appendChild(row);
         for (let j = 0; j < this.settings.currentField[i].length; j++) {
            // заполняем ячейки
            const cell = document.createElement('div');
            cell.className = `cell ${i} ${j}`;
            row.appendChild(cell);

            cell.innerText = this.settings.currentField[i][j];
         }
      }
   },
   // получаем новое поле
   getNewField(e) {
      let field = this.settings.currentField;
      let currentUser = this.getCurrentUser();
      const userRow = this.getUserCell(e)[0];
      const userCol = this.getUserCell(e)[1];
      field[userRow][userCol] = currentUser;
      return field;
   },
   //получаем текущего игрока
   getCurrentUser() {

      let currentUser = "";
      if (this.settings.current % 2 == 0) {
         currentUser = this.settings.player1
         this.settings.current++;
      } else {
         currentUser = this.settings.player2
         this.settings.current++;
      }
      return currentUser;

   },
   // получаем ячейку
   getUserCell(e) {
      const row = e.classList["value"].split(" ")[1];
      const col = e.classList["value"].split(" ")[2];
      return [row, col]
   },
   // проверка победителя
   IsWinner() {
      let field = this.settings.currentField;
      let hasWinner = false;
      for (let i = 0; i < 3; i++) {

         if (field[i][0] === field[i][1] && field[i][0] === field[i][2] && (field[i][0] === "X" || field[i][0] === "O")) {
            hasWinner = true;
            return [hasWinner, field[i][0]]
         }
         if (field[0][i] === field[1][i] && field[0][i] === field[2][i] && (field[0][i] === "X" || field[0][i] === "O")) {
            hasWinner = true;
            return [hasWinner, field[0][i]];
         }

         if (field[0][0] === field[1][1] && field[0][0] === field[2][2] && (field[0][0] === "X" || field[0][0] === "O")) {
            hasWinner = true;
            return [hasWinner, field[1][1]];
         }
         if (field[0][2] === field[1][1] && field[0][2] === field[2][0] && (field[0][2] === "X" || field[0][2] === "O")) {
            hasWinner = true;
            return [hasWinner, field[1][1]];
         }
      }
      return [hasWinner, ""];
   },

}
game.render();
document.querySelector('.main').addEventListener('click', e => {
   game.run(e.target);
});




