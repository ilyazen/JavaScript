<template>
  <div class="block-wrapper mb-2 text-center">
    <h2 class="display-5">Комментарии</h2>
    <p class="text">//https://jsonplaceholder.typicode.com/comments?_limit=6</p>
  </div>
  <div class="comments-wrapper">
    <div
      class="card"
      style="width: 18rem"
      v-for="(comment, i) in comments"
      :key="i"
    >
      <div class="card-body">
        <h5 class="card-title">{{ comment.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ comment.email }}</h6>
        <p class="card-text">{{ comment.body }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //https://jsonplaceholder.typicode.com/comments?_limit=42
  data() {
    return {
      comments: [],
      url: "https://jsonplaceholder.typicode.com/comments?_limit=6",
    };
  },
  mounted() {
    const axios = require("axios");
    axios.get(this.url).then((r) => (this.comments = r.data));
  },
  method: {},
};
</script>