<template>
  <PostDetail :post="fetchedPost"/>
</template>
<script>
import PostDetail from "@/components/post/PostDetail";
export default {
  components: {
    PostDetail,
  },
  asyncData(context,callback){
    setTimeout(() => {
      callback(null,{
        fetchedPost : {
          id: 1,
            title: "Başlık 1 -"+context.params.postId,
            subTitle: "Alt Başlık 1",
            text: "Açıklama 1",
            author: "Yazar 1",
        }
      })
    }, 1000);
  }
};
</script>
