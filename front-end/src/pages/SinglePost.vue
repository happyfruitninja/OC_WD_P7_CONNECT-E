<template>
  <div class="container_home">
    <div class="display_box">
      <div class="display_post">
        {{ singlePost }}
        <img
          class="image"
          src="imageUrl"
          v-if="imageUrl"
          alt="uploaded image"
          width="100"
          height="100"
        />
        <audio controls class="audio" src="audioUrl" v-if="audioUrl"></audio>
        <video
          controls
          class="video"
          src="videoUrl"
          v-if="videoUrl"
          width="100"
          height="100"
        ></video>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "singlePost",
  data() {
    const post = {};
    return { post };
  },
  mounted(){
    //TODO get the single post getting from vue router - this.$route.params.id + user token
    //TODO call the backend to mark the post as read by the current user
  },
  methods: {
    
  },
};
</script>
<style></style>
