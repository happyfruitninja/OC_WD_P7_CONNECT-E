<template>
  <div class="container_home">
    <div class="container_display_box">
      <div class="display_box" v-for="post in posts" :key="post">
        <p :class="{ markedAsViewed: isViewed(post) }">Unread</p>
        <!-- FIXME add post text -->
        <!-- TODO indicate on the page if the user has read not the post from other users WCAG(accessibility) + run lighthouse on the browser -->
        <router-link :to="`/posts/${post.id}`">
          <div class="text_post">{{ post.post }}</div>
          <div class="display_post">
            <audio
              controls
              class="audio"
              :src="post.mediaUrl"
              v-if="['mp3'].includes(getExtension(post.mediaUrl))"
              :alt="audioDescription"
              width="500"
            ></audio>
            <img
              class="image"
              :src="post.mediaUrl"
              v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
              :alt="imageDescriptoin"
            />
            <video
              controls
              class="video"
              :src="post.mediaUrl"
              v-if="['mp4'].includes(getExtension(post.mediaUrl))"
              :alt="videoDescription"
              width="500"
            ></video>
          </div>
        </router-link>
      </div>
    </div>
    <div class="container_post_box">
      <div class="post_box">
        <textarea v-model="post" placeholder="My message.."></textarea>
        <div class="buttons">
          <input
            id="input"
            type="file"
            @change="attachFile"
            accept="image/*, audio/*, video/*"
          />
          <button id="button" @click="postMessage">Post</button>
        </div>
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
      const { token, userId } = JSON.parse(
        localStorage.getItem("userInfo") || "{}"
      );
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
    isViewed(post) {
      const { userId } = JSON.parse(localStorage.getItem("userInfo"));
      return post.usersRead.includes(userId);
    },
  },
};
</script>

<style>
.container_home {
  overflow: scroll;
  position: fixed;
  top: 100px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
}

.container_display_box {
  margin: 220px auto;
  width: 100%;
  padding: 0 20px 0;
}

.display_box {
  padding: 10px;
  height: 100%;
  margin: 5px auto;
  max-height: 500px;
  min-width: 400px;
  max-width: 800px;
  border: 1px solid gray;
}
.container_post_box {
  background-color: white;
  width: 100%;
  min-width: 400px;
  position: fixed;
  top: 100px;
  padding: 20px 20px 0;
}
.post_box {
  z-index: 2;
  margin: 10px auto;
  height: 150px;
  min-width: 400px;
  max-width: 800px;
  display: flex;
}

textarea {
  width: 70%;
  height: 100%;
  overflow: scroll;
  border: 1px solid gray;
  padding: 10px;
}
.text_post {
  margin: 5px 0;
  color: black;
}

.buttons {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin: 0 0 0 10px;
  position: relative;
  height: 100%;
}

#button {
  height: 48%;
  font-size: 1em;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.markedAsViewed {
  display: none;
}

#input {
  height: 48%;
  color: transparent;
  font-size: 1em;
  width: 100%;
  color: hidden;
  padding: 10% 27%;
  margin: 0 auto 10px;
  background-color: rgb(235, 235, 235);
  border: 1px solid gray;
  position: absolute;
  top: 0;
}

@media only screen and (max-width: 768px) {
  .post_box {
    flex-direction: column;
    width: 100%;
    height: 200px;
  }

  textarea {
    height: 70%;
    width: 100%;
  }
  .buttons {
    margin: 5px 0;
    flex-direction: row;
    width: 100%;
    height: 30%;
    position: relative;
    display: flex;
  }

  #button {
    right: 0;
    width: 50%;
    height: 100%;
  }

  #input {
    padding: 2.5% 17%;
    width: 50%;
    height: 100%;
    left: 0;
  }
}
</style>
