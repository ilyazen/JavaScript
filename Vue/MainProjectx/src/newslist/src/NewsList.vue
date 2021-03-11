<template>
  <TheNavbar />
  <AppHeader/>
  <AppNews
  :news = "news"
  @open-news="openNews"
  />
  <AppAddNews
  :news = "news"
  @add-news="addNewsCounter++"
  />

  <AppFooter
  :openNewsCounter = "openNewsCounter"
  :addNewsCounter="addNewsCounter"
  />
</template>

<script>
import AppHeader from './AppHeader.vue'
import AppNews from './AppNews'
import AppAddNews from './AppAddNews'
import AppFooter from './AppFooter'
import TheNavbar from "../../components/the-navbar";

export default {
  
  data() {
    return {
      news: [
        {
          id:0,
          title:"News title 1",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi consectetur laboriosam nemo enim est tempore excepturi, sint maiores eligendi rerum eos repudiandae. Repudiandae delectus cupiditate necessitatibus, fugiat dignissimos consequatur.",
          isOpen:false,
        },
        {
          id:1,
          title:"News title 2",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi consectetur laboriosam nemo enim est tempore excepturi, sint maiores eligendi rerum eos repudiandae. Repudiandae delectus cupiditate necessitatibus, fugiat dignissimos consequatur.2",
          isOpen:false,
        },
        {
          id:2,
          title:"News title 3",
          description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nisi consectetur laboriosam nemo enim est tempore excepturi, sint maiores eligendi rerum eos repudiandae. Repudiandae delectus cupiditate necessitatibus, fugiat dignissimos consequatur.3",
          isOpen:false,
        },
      ],
      openNewsCounter:0,
      addNewsCounter:0,
    }
  },
  components: {
    AppHeader,
    AppNews,
    AppFooter,
    AppAddNews,
    TheNavbar,
  },
  methods:{
    openNews(){
      this.openNewsCounter++;
    },
    
  },

}
</script>

<style>
.item-wrapper {
   display: flex;
   justify-content: space-between;
}
.news-item {
   margin-bottom: 10px;
}
.add-news-btn {
   margin-top: 10px;
   margin-bottom: 10px;
}
.add-news {
   margin-bottom: 10px;
}
</style>

