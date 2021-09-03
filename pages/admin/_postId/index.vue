<template>
  <PostForm :is-update="true" :post="loadedPost" />
</template>
<script>
import PostForm from "@/components/admin/PostForm";
export default {
  components: {
    PostForm,
  },
  data() {
    return {
      loadedPost: {
        id: 1,
        title: "Başlık 1",
        subTitle: "Alt Başlık 1",
        text: "Açıklama 1",
        author: "Yazar 1"
      },
    };
  },
};
</script>
