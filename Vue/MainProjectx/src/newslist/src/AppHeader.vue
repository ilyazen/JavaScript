<template>
<div class="container">
   <h1 class="display-4">{{ title }} {{ now }}</h1>
   <hr>
   </div>
</template>
<script>
export default {
   data () {
      return {
         title:"Новости",
         now: new Date().toLocaleDateString(),
      }
   },
}
</script>