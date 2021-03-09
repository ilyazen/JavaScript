<template>
  <div class="container">
  <div class="row mb-1">
    <div class="col-4 column border border-info mr-1">
      <AppLeftSide
      @add-block = "blocks = $event"
      />
    </div>
    <div class="col column border border-info" >
      <div class="text-center" v-if="blocks.length === 0">
        <h2 class="display-5"> Добавьте блок</h2>
      </div>
      <div v-for="block in blocks" :key="block.id" >
     <TitleBlock
     v-if="block.selected === 'title'"
     :value = 'block.value'
     /> 
     <SubTitleBlock
     v-if="block.selected === 'subtitle'"
     :value = 'block.value'
     /> 
     <TextBlock
     v-if="block.selected === 'text'"
     :value = 'block.value'
     /> 
     <ImgBlock
     v-if="block.selected === 'img'"
     :value = 'block.value'
     /> 
     </div>
    </div>
    
    </div>
    <div class="row">
      <div class="col column border border-info" @click="show">
      <AppComments

      />
       
    </div>
    </div>
  </div>
  
</template>

<script>
import AppLeftSide from './components/AppLeftSide'
import TitleBlock from './components/TitleBlock'
import SubTitleBlock from './components/SubTitleBlock'
import TextBlock from './components/TextBlock'
import ImgBlock from './components/ImgBlock'
import AppComments from './components/AppComments'

export default {
  name: 'App',
  data() {
    return {
      blocks:[],
      
      
    }
  },
  components: {
    AppLeftSide,TitleBlock,SubTitleBlock,TextBlock,ImgBlock,AppComments
  },
  methods:{
    show() {
      console.log(this.blocks)
    }
  }
   

}
</script>

<style>

</style>
