<template>
  <div class="container_home">
    <div class="single_display_post">
      <div class="text">{{ post.post }}</div>
      <audio
        controls
        class="audio"
        :src="post.mediaUrl"
        v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
      ></audio>
      <img
        class="image"
        :src="post.mediaUrl"
        v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
        alt="uploaded image"
        width="500"
      />
      <!-- FIXME fix v-if and src tag attributes for media tags  -->

      <video
        controls
        class="video"
        src="videoUrl"
        v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
        width="500"
      ></video>
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
.single_display_post {
  margin: 30px auto;
  min-width: 400px;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
}

.text {
  margin: 10px;
  font-size: 1em;
  height: 100%;
}
</style>
