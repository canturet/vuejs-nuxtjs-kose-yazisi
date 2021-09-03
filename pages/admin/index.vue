<template>
  <div>
    <div class="container d-flex justify-content-center align-items-center">
      <button class="btn btn-dark" @click="$router.push('/admin/new-post')">Yeni Bir Yazı Ekle</button>
    </div>
    <PostList :posts="fetchedPosts" :is-admin="true" />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
export default {
  layout: "admin",
  components: {
    PostList,
  },
  computed : {
    fetchedPosts(){
      return this.$store.getters.getPosts
    }
  }
};
</script>
<style scoped></style>
