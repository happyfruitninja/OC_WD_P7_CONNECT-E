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
  methods: {
    postMessage() {
      //TODO add bear token to options
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
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
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
<style></style>
