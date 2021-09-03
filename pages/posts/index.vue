<template>
  <div>
    <PostList :posts="fetchedPosts" />
  </div>
</template>
<script>
import PostList from "@/components/post/PostList";
export default {
  components: {
    PostList,
  },
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        fetchedPosts: [
          {
            id: 1,
            title: "Başlık 1_1",
            subTitle: "Alt Başlık 1_1",
            text: "Açıklama 1_1",
            author: "Yazar 1_1",
          },
          {
            id: 2,
            title: "Başlık 2_1",
            subTitle: "Alt Başlık 2_1",
            text: "Açıklama 2_1",
            author: "Yazar 2_1",
          },
        ],
      });
    }, 1000);
  },
};
</script>
<style scoped></style>
