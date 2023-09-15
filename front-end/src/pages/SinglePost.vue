<template>
  <div class="container_home">
    <div class="display_box">
      <div class="display_post">
        {{ post.post }}
       
        <img
          class="image"
          :src="post.mediaUrl"
          v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
          alt="uploaded image"
          width="100"
          height="100"
        />
        <!-- FIXME fix v-if and src tag attributes for media tags  -->
        <!-- <audio controls class="audio" src="audioUrl" v-if="post.mediaUrl"></audio>
        <video
          controls
          class="video"
          src="videoUrl"
          v-if="videoUrl"
          width="100"
          height="100"
        ></video> -->
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
  mounted() {
    //get the single post getting from vue router - this.$route.params.id + user token
    const { token } = JSON.parse(localStorage.getItem("userInfo"));
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(`http://localhost:3000/api/posts/${this.$route.params.id}`, options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((result) => {
        console.log(result);
        this.post = result;
        this.markThePostAsRead(this.post);
      });
  },
  methods: {
    getExtension(mediaUrl) {
      let result = null;
      if (mediaUrl) {
        result = mediaUrl.split(".").pop();
      }
      return result;
    },
    markThePostAsRead(readPost) {
      const { userId, token } = JSON.parse(localStorage.getItem("userInfo"));
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      };
      console.log("User read the post");
      fetch(`http://localhost:3000/api/posts/${readPost.id}/read`, options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style>
/* FIXME styling  */
</style>
