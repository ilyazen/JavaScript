<template>
   <div class="block-wrapper mb-2 text-center">
      <img :src="value">
   </div>
</template>
<script>
export default {
   props:['value']
}
</script>