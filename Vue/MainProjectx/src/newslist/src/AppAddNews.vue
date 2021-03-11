<template>
   <div class="container">
      <button type="button" 
      class="btn btn-outline-primary add-news-btn" 
      @click="openAddNewsArea = !openAddNewsArea"
      >{{ !openAddNewsArea?"Добавить новость":"Закрыть поле" }}</button>
   <div class="add-news" v-if="openAddNewsArea">
   <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Заголовок новости</span>
  <input type="text" class="form-control" v-model="formTitle" placeholder="Введите заголовок новости" aria-label="Title" aria-describedby="basic-addon1">
</div>
<div class="input-group">
  <span class="input-group-text">Описание новости</span>
  <textarea class="form-control" v-model="formDescription" placeholder="Введите описание новости"></textarea>
</div>
  <button class="btn btn-primary add-news-btn" type="button" @click="publish">Опубликовать</button>
  

   </div>
   </div>
</template>
<script>
export default {
   props: {
      news:Array,
   },
   methods:{
      publish() {
         if(this.formTitle !="" && this.formTitle !="") {
         this.addNewsCounter++
         let newNews = {
          id:this.news.length,
          title:this.formTitle,
          description: this.formDescription,
          isOpen:false,
         };
         this.news.push(newNews);
         this.$emit("add-news",this.addNewsCounter)
        }
      },

   },
   data() {
      return {
         openAddNewsArea:false,
         formTitle:"",
         formDescription:"",
         addNewsCounter:0
      }
   },

}
</script>