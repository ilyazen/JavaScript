<template>
   <div class="container">
   <p><ins>Открыто новостей:{{openNewsCounter}} Опубликованно новостей:{{addNewsCounter}}</ins></p>
   </div>
</template>
<script>
export default {
   props: ["openNewsCounter","addNewsCounter"],
      
   
}
</script>