<template>
  <div class="container_home">
    <div class="container_display_box">
      <div class="display_box" v-for="post in posts" :key="post">
        <!-- FIXME add post text -->
        <!-- TODO indicate on the page if the user has read not the post from other users WCAG(accessibility) + run lighthouse on the browser -->
        <router-link :to="`/posts/${post.id}`"
          ><div class="display_post">
            <img
              class="image"
              :src="post.mediaUrl"
              v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
              :alt="imageDescriptoin"
              width="100"
              height="100"
            />
            <audio
              controls
              class="audio"
              :src="post.mediaUrl"
              v-if="['mp3'].includes(getExtension(post.mediaUrl))"
              :alt="audioDescription"
            ></audio>
            <video
              controls
              class="video"
              :src="post.mediaUrl"
              v-if="['mp4'].includes(getExtension(post.mediaUrl))"
              :alt="videoDescription"
            ></video>
          </div>
        </router-link>
      </div>
    </div>
    <div class="post_box">
      <textarea v-model="post" placeholder="My message.."></textarea>
      <div class="buttons">
        <input
          id="input"
          type="file"
          @change="attachFile"
          accept="image/*, audio/*, video/*"
        />
        <button @click="postMessage">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  data() {
    const post = "";
    const media = null;
    return {
      post,
      media,
      posts: [],
    };
  },
  mounted() {
    const { token } = JSON.parse(localStorage.getItem("userInfo"));
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch("http://localhost:3000/api/posts", options)
      .then((data) => {
        if (!data.ok) {
          throw Error(data.status);
        }
        return data.json();
      })
      .then((result) => {
        // console.log("inside then");
        console.log(result);
        this.posts = result;
      });

    this.posts = [];
  },
  methods: {
    postMessage() {
      const { token, userId } = JSON.parse(localStorage.getItem("userInfo"));
      const postInfo = {
        post: this.post,
        userId,
      };
      let payload;
      let headers = { Authorization: `Bearer ${token}` };
      if (this.media) {
        payload = new FormData();
        payload.append("post", JSON.stringify(postInfo));
        payload.append("media", this.media);
      } else {
        headers["Content-Type"] = "application/json";
        payload = JSON.stringify(postInfo);
      }
      const options = {
        method: "POST",
        headers,
        body: payload,
      };
      console.log(JSON.stringify(options));

      fetch("http://localhost:3000/api/posts", options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result);
          // redirect user to login using Vue(need token) instead of location.assign(`./login`);
          //  location.assign("./home");
          this.$router.go(0);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getExtension(mediaUrl) {
      let result = null;
      if (mediaUrl) {
        result = mediaUrl.split(".").pop();
      }
      return result;
    },
    attachFile(event) {
      this.media = event.target.files[0];
    },
    selectPost() {
      const selectedPost = "";
      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedPost),
      };
      console.log("Post selected");

      //  user fetch API to send selectPost request
      fetch("http://localhost:3000/api/auth/posts", options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result);
          location.assign(`./singlePost`);
        });
    },
  },
};
</script>

<style>
.container_home {
  position: relative;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  padding: 50px;
  display: flex;
  justify-content: center;
}

.container_display_box {
  margin: 220px auto;
  width: 100%;
}

.display_box {
  margin: 0 auto 10px;
  border: 1px solid darkgrey;
  height: 200px;
  min-width: 500px;
  max-width: 800px;
}

.post_box {
  padding: 20px 0 0;
  margin: 0 auto;
  top: 100px;
  z-index: 2;
  position: fixed;
  height: 150px;
  width: 100%;
  min-width: 500px;
  max-width: 800px;
  display: flex;
  flex-direction: row;
}
textarea {
  width: 70%;
  overflow: scroll;
  border: 1px solid gray;
}

.buttons {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 10px;
  position: relative;
}

.buttons button {
  height: 48%;
  font-size: 1em;
  position: absolute;
  bottom: 0;
  width: 100%;
}

#input {
  height: 48%;
  color: transparent;
  font-size: 1em;
  width: 100%;
  color: hidden;
  padding: 10%;
  margin: 0 auto 10px;
  background-color: rgb(235, 235, 235);
  border: 1px solid gray;
  position: absolute;
  top: 0;
}

.img {
  height: 100px;
}

@media only screen and (max-width: 768px) {
}
</style>
