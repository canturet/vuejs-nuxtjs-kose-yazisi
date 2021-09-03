<template>
  <PostForm
    @submit="updatePost($event)"
    :is-update="true"
    :post="fetchedPost"
  />
</template>
<script>
import axios from "axios";
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-js-kose-yazisi-default-rtdb.firebaseio.com/posts/" +
          context.params.postId +
          ".json"
      )
      .then((response) => {
        return {
          fetchedPost: response.data,
        };
      });
  },
  methods: {
    updatePost(editedPost) {
      axios.put(
        "https://nuxt-js-kose-yazisi-default-rtdb.firebaseio.com/posts/" +
          this.$route.params.postId +
          ".json",editedPost
      ).then(response=>{
        this.$router.push("/admin")
      }).catch(e => console.log(e))
    },
  },
};
</script>
