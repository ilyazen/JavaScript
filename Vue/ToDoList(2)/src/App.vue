<template>
<TheNavbar />
  <div class="container">
    
  <router-view>

  </router-view>
  </div>
</template>

<script>
import  {provide, reactive, ref, watch} from 'vue'
import TheNavbar from './components/the-navbar'


export default {
   setup() {
     
   },
   components: {
     TheNavbar,

   },
  
   

}
</script>

<style>

</style>
