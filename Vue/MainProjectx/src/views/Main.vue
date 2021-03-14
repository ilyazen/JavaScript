<template>
   <TheNavbar/>
   <h3 @click="show">Текущие проекты по VUE:</h3>
   <div class="main-body">
         <div class="card main-item m-1" style="width:250px" v-for="project in projects" :key="project.id">
         <img :src='project.imgUrl' class="card-img-top"  alt="...">
         <div class="card-body">
          <h5 class="card-title">{{ project.name }}</h5>
          <p class="card-text">{{ project.text }}</p>
          <router-link :to='project.link'>
          <button class="btn btn-primary">Перейти к проекту</button>
          </router-link>
         </div>
         </div>
   </div>

</template>
<script>
import TheNavbar from '../components/the-navbar'
export default {
   components: {TheNavbar},
   inject:["projects"],
   methods:{
      show(){
         console.log(this.projects);
      }
   }
   
}
</script>

