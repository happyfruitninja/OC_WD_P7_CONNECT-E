<template>
  <div class="container-home">
    <div class="display-box">{{ postInfo }}</div>
    <div class="post-box">
      <textarea placeholder="My message.."></textarea>
      <div class="buttons">
        <input type="file" @change="attachFile" />
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
    const image = null;
    return {
      post,
      image
    };
  },
  methods: {
    postMessage() {
      const postInfo = {
        post: this.post,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postInfo),
      };
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
          localStorage.setItem("postInfo", JSON.stringify(result));
          location.assign("./home");
        });
    },
    attachFile(event) {
      this.image = event.target.files[0];
      // const attachFile = {
      //   file: this.file,
      // };
      // const options = {
      //   method: "FILE",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(attachFile),
      // };
      // fetch("http://localhost:3000/api/auth/home", options)
      //   .then((data) => {
      //     if (!data.ok) {
      //       throw Error(data.status);
      //     }
      //     return data.json();
      //   })
      //   .then((result) => {
      //     console.log(result);
      //     localStorage.setItem("attachFile", JSON.stringify(result));
      //     location.assign("./home");
      //   });
    },
  },
};
</script>

<style>
.container-home {
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  padding: 100px auto;
}
.display-box {
  margin: 10px auto;
  border: 1px solid darkgrey;
  width: 100%;
  height: 60%;
  display: flex;
}
.post-box {
  width: 100%;
  height: 15%;
  display: flex;
  flex-direction: row;
}
textarea {
  width: 100%;
  height: 100%;
}

.buttons {
  display: flex;
  flex-direction: column;
  width: 100px;
}

.buttons button {
  height: 50%;
}
</style>
