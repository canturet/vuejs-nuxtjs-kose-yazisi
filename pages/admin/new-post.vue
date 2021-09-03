<template>
  <PostForm @submit="savePost($event)" />
</template>
<script>
import axios from "axios"
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  methods : {
    savePost(post){
      axios.post("https://nuxt-js-kose-yazisi-default-rtdb.firebaseio.com/posts.json",post)
        .then(res => {
          this.$router.push("/admin")
        })
    }
  }
};
</script>
