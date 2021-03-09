<template>
<form>
   <div class="block-type mb-2">
   <label for="type">Тип блока</label>
      <select class="form-select" v-model="selected">
        <option value="title" selected>Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="img">Картинка</option>
        <option value="text">Текст</option>
      </select>
      </div>
      
      <div class="mb-2">
         <label for="value" class="form-label">Значение</label>
         <textarea class="form-control" id="value" v-model="value" rows="3"></textarea>
         </div>
      <button type="button" :disabled="value===null || selected===null" class="btn btn-outline-info mb-2" @click="addBlock">Добавить</button>
      </form>
</template>
<script>
export default {
   data() {
      return {
         selected:null,
         value:null,
         block:[],
         id:0,
      }
   },
   methods:{
      addBlock(){
         let blockItem = {};
        // let blockKey = this.selected;
        // blockItem[`${blockKey}`] = this.value;
         blockItem.selected = this.selected;
         blockItem.value = this.value;
         blockItem.id = this.id;
         this.id++;
         this.block.push(blockItem);
         this.$emit("add-block",this.block)
      }
   }

   
}
</script>
