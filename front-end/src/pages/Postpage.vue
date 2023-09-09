<template>
  <div class="container_home">
    <div class="post_box">
      <textarea v-model="post" placeholder="My message.."></textarea>
      <div class="buttons">
        <input
          type="file"
          class="attach_file_button"
          @change="attachFile"
          accept="image/*, audio/*, video/*"
        />
        <button @click="postMessage">Post</button>
      </div>
    </div>
    <div class="display_box" v-for="post in posts" :key="post">
      <!-- TODO add Vue router link tag that links to the single page with the post.id-->
       <div class="display_post" v-on="click" >
        <router-link to="/posts/:id">{{ post.id }}</router-lin>        
        <img
          class="image"
          :src="post.mediaUrl"
          v-if="['png', 'jpg'].includes(getExtension(post.mediaUrl))"
          alt="uploaded image"
          width="100"
          height="100"
        />
        <audio controls class="audio"  :src="post.mediaUrl" v-if="['mp3'].includes(getExtension(post.mediaUrl))"></audio>
        <!-- <video
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
    // selectPost() {
    //   const selectedPost = "";
    //   const options = {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(selectedPost),
    //   };
    //   console.log("Post selected");

    //   //  user fetch API to send selectPost request
    //   fetch("http://localhost:3000/api/auth/posts", options)
    //     .then((data) => {
    //       if (!data.ok) {
    //         throw Error(data.status);
    //       }
    //       return data.json();
    //     })
    //     .then((result) => {
    //       console.log(result);
    //       location.assign(`./singlePost`);
    //     });
    // },
  },
};
</script>

<style>
.container_home {
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding: 100px auto;
}
.display_box {
  margin: 10px auto;
  border: 1px solid darkgrey;
  width: 100%;
  display: flex;
  min-height: 200px;
}

.post_box {
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
}
textarea {
  width: 60%;
  height: 100%;
}

.buttons {
  display: flex;
  flex-direction: column;
}

.buttons button {
  height: 50%;
}

input {
  height: 50%;
}

.img {
  height: 100px;
  width: 100px;
}

/* .attach_file_button input{
  height: 100%;
} */
</style>
