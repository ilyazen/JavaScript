const app = new Vue({
   el: '#app',
   data: {
     title: 'Заметки',
     placeholderText:"Введите заметку",
     notes:[],
     inputValue:'',
     noteDone:0,
   
   },
   methods:{
      addNote () {
         
      if(!this.notes.includes(this.inputValue)) {
         this.notes.push(this.inputValue);
      }

      },
      
      removeNote(idx) {
         this.notes.splice(idx,1)
      },
      checkStatus(event){
         let currentCheckboxStatus = event.target.checked;
         if(currentCheckboxStatus) {
            this.noteDone ++;
         } else {
            this.noteDone --;
         }
      }

      
},



 })