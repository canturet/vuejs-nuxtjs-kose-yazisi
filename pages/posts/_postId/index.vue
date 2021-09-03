<template>
  <PostDetail :post="fetchedPost"/>
</template>
<script>
import axios from "axios" 
import PostDetail from "@/components/post/PostDetail";
export default {
  components: {
    PostDetail,
  },
  asyncData(context){
    return axios.get("https://nuxt-js-kose-yazisi-default-rtdb.firebaseio.com/posts/"+context.params.postId+".json")
      .then(response => {
        return {
          fetchedPost : response.data
        }
      })
  }
};
</script>
