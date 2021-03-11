<template>
   <div class="container">
      <h3 class="h3">Актуальные новости ({{ news.length }})</h3>
      <hr>
      <div class="news-item" v-for="item in news" :key="item.id">
         <div class="item-wrapper">
         <h4 class="h4">{{ item.title }}</h4>
         <button type="button" class="btn btn-secondary" @click="open(item.isOpen,item.id)">{{ !item.isOpen?"Открыть":"Закрыть" }}</button>
         </div>
         <p class="lead" v-if="item.isOpen">{{ item.description }}</p>
      </div>
   </div>
</template>
<script>
export default {
   props: {
      news:Array,
   },
   emits:['open-news',],
   data() {
      return {
         openCounter:0,

      }
   },
   methods: {
      open(isOpen,id) {
         this.news[id].isOpen = !isOpen;
         if(this.news[id].isOpen) {
         this.$emit("open-news")
         }
      }
   }
}
</script>