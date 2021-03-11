<template>
<nav class="navbar navbar-expand-sm justify-content-center the-navbar">
  
  <router-link class="m-2" to="/Main">Главная</router-link>
  
  <router-link class="m-2" :to='project.link' v-for="project in projects" :key="project.id">
  {{ project.name }}
  </router-link>
  <router-link class="m-2" to="/">Выйти</router-link>
</nav>

</template>
<script>

export default {
   inject:['projects'],

 
}
</script>
<style scoped>
.the-navbar {
  font-size: 18px;
}
</style>
