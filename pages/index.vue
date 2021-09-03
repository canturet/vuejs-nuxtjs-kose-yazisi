<template>
  <div>
    <PostList :posts="fetchedPosts" />
    <About />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
import About from "@/components/home/About";
export default {
  components: {
    PostList,
    About,
  },
  created(){
    this.$store.dispatch("setPosts",this.fetchedPosts)
  },
  asyncData(context) {
    return new Promise((resolve, reject) => {
      resolve({
        fetchedPosts: [
          {
            id: 1,
            title: "Başlık 1",
            subTitle: "Alt Başlık 1",
            text: "Açıklama 1",
            author: "Yazar 1",
          },
          {
            id: 2,
            title: "Başlık 2",
            subTitle: "Alt Başlık 2",
            text: "Açıklama 2",
            author: "Yazar 2",
          },
        ],
      });
    })
      .then(data => {
        return data
      })
      .catch(e => {
        context.error(e);
      });
  },
};
</script>
<style scoped></style>
