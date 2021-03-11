<template>
<TheNavbar />
   <div class="container">
    <div class="card">
      <h1>План по изучению Vue.js</h1>
      <div class="steps">
        <div class="steps-content">
          {{ steps[activeIndex].text }}
        </div>
        <ul class="steps-list">
          <li class="steps-item" v-bind:class="{active:statusActiveArr[i-1],done:statusDoneArr[i-1]}"  v-for="i in steps.length" :key="i" @click="setActive(i,$event)"><span>{{ i }}</span>{{ getCurrentTitle(i) }}</li>
        </ul>
        <div v-if="!finish">
          <button class="btn" :disabled="firstEl" @click="prev">Назад</button>
          <button class="btn primary" @click="nextOfFinish" v-if="!lastEl">Вперед</button>
          <button class="btn primary" v-else @click="setFinish">Закончить</button>
        </div>
        <div v-else>
          <button class="btn"  @click="reset">Начать заново</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TheNavbar from "../components/the-navbar";

export default {
    data() {
    return {
      activeIndex: 0, 
      steps: [
        {title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.'},
        {title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.'},
        {title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.'},
        {title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.'},
        {title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.'},
      ],
      statusActiveArr : [],
      statusDoneArr: [],
      firstEl:false,
      lastEl:false,
      finish:false,
    }
  },
  components:{
   TheNavbar,
  },
  methods: {
    prev() {
      this.activeIndex--;
      this.setStatus();
    },
    reset() {
      this.finish = false;
      this.laseEl = false;
      this.activeIndex = 0;
      this.setStatus ();
    },
    nextOfFinish() {
      this.activeIndex++;
      this.setStatus();
    },
    setFinish() {
      this.finish = true;
    },
    
    getCurrentTitle(i) {
      return this.steps[i-1].title
    },
    setActive(idx,event) {
      if(!this.finish) {
      this.activeIndex = idx - 1;
      this.setStatus();
      }

    },
    setStatus () {
      if(!this.finish) {
      this.checkEl(),
      console.log(this.firstEl,this.lastEl)
      this.statusActiveArr = [];
      this.statusDoneArr = [];
      for(let i=0;i<this.steps.length;i++) {
        if(i === this.activeIndex) {
          this.statusActiveArr.push(true);
        } else {
          this.statusActiveArr.push(false);
        }
        if(i<this.activeIndex) {
          this.statusDoneArr.push(true)
        } else {
          this.statusDoneArr.push(false)
        }
      }
    }
    },
    isFirstEl() {
      this.firstEl = this.activeIndex === 0;
      
    },
    isLastEl() {
      this.lastEl = this.activeIndex === this.steps.length - 1;
    },
    checkEl() {
      this.isFirstEl();
      this.isLastEl();
    },
  },
    mounted() {
      this.setStatus();
    }
}
</script>
<style scoped src="./theme.css">

</style> 

