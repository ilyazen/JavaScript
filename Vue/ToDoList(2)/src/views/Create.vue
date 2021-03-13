<template>
  <form @submit.prevent="submit">
   <h2>Создать новую задачу</h2>
  <div class="input-group flex-nowrap mb-2">
  <span class="input-group-text">Название</span>
  <input type="text" class="form-control" v-model="title">
</div>
    <div class="input-group flex-nowrap mb-2">
  <span class="input-group-text">Дата окончания</span>
  <input type="date" class="form-control" v-model="dataEnd">
</div>
<div class="input-group mb-2">
  <span class="input-group-text">Описание</span>
  <textarea class="form-control" v-model="body"></textarea>
</div>
<button type="button" class="btn btn-outline-success mb-2" :disabled="!isValid" @click="submit">Создать задачу</button>
  </form>
 <div class="alert alert-danger" role="alert" v-if="!isValid" style="width:200px">
  Заполните все поля
</div>
</template>

<script>
import { useStore } from 'vuex'
import {useRouter} from 'vue-router'
import {computed,inject,reactive,ref} from 'vue'


export default {
   setup() {
      const title = ref('')
      const dataEnd = ref(null)
      const body = ref('')
      const router = useRouter()
      const store = useStore();
      const isValid = computed(() => {return title.value !== '' && dataEnd.value && body.value !== ''})
      const tasks = store.getters.getTasks;

     
      
      function submit() {
         
         const item = {
            id:tasks.length,
            title:title.value,
            body:body.value,
            dataСreation:new Date().toLocaleDateString(),
            dataEnd:dataEnd.value,
            status:false,
         }
         store.commit("addTask",item)
         router.push('/todomain')
         
         
      }
      
      
      return{
         title,dataEnd,body,
         router,
         tasks:tasks,
         isValid,
         submit,
      }

   }

}
</script>

<style>

</style>