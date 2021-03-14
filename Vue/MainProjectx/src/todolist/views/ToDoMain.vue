<template>
<TheNavbar />
<theToDoListNavbar />
   <div class="alert alert-primary" role="alert" v-if="!tasks.length">
  Список задач пуст
</div>
   <div class="card text-center mb-3" v-for="(task,index) in tasks" :key="task.id" v-else>
  <div class="card-header" :class ="task.status? 'done': '' ">{{ !task.status? "Выполняется":"Завершено"}}</div>
  <div class="card-body">
    <h5 class="card-title"> {{ task.title }}</h5>
    <p class="card-text">{{ task.body }}</p>
    <button class="btn  mr-1" :class ="!task.status? 'btn-success': 'btn-outline-info' " @click="finishTaskToggle(index)">{{ !task.status? "Завершить":"Продолжить"}}</button>
    <button class="btn btn-warning" @click="del(index)">Удалить</button>
  </div>
  <div class="card-footer text-muted">
    Дата создания: {{ task.dataСreation }}, Дата окончания: {{ task.dataEnd }}
  </div>
</div>

</template>

<script>
import { useStore } from 'vuex'
import {reactive} from 'vue'
import theToDoListNavbar from '../components/theToDoListNavbar'
import TheNavbar from "./../../components/the-navbar"


export default {
   setup() {
      const store = useStore();
      const tasks = store.getters.getTasks;
      
      // const tasks = reactive([
      //    {  
      //       id:0,
      //       title:"Example title",
      //       body:"Example body",
      //       dataСreation:new Date().toLocaleDateString(),
      //       dataEnd:new Date().toLocaleDateString(),
      //       status:false,
      //    },
      //    {  
      //       id:1,
      //       title:"Example title",
      //       body:"Example body",
      //       dataСreation:new Date().toLocaleTimeString(),
      //       dataEnd:new Date().toLocaleTimeString(),
      //       status:true,
      //    },
      // ]);
      function del(index) {
         tasks.splice(index,1) 
      }
      function finishTaskToggle(index) {
         tasks[index].status = !tasks[index].status;
      }
      

      return {
      tasks,
      del,
      finishTaskToggle,
      
      
      }

   },
   components: {
     theToDoListNavbar,
     TheNavbar,
   },

}
</script>

<style scoped>
.done {
   color:green;
}
.main-body {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-around;
}

</style>