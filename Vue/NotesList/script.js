const app = new Vue({
   el: '#app',
   data: {
     title: 'Заметки',
     placeholderText:"Введите заметку",
     notes:[],
     inputValue:'',
   
   },
   methods:{
      addNote () {
         this.notes.push(this.inputValue);
      },
      removeNote(idx) {
         this.notes.splice(idx,1)
      },
      
},


 })