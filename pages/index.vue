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
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
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
    }, 1000);
  },
};
</script>
<style scoped></style>
