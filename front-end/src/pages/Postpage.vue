<template>
  <div class="container-home">
    <div class="display-box">This is the display box</div>
    <div class="post-box">
      <textarea>This is the post box</textarea>
      <div class="buttons">
        <button v-on="click" id="attach">Attach</button>
        <button v-on="click" id="post">Post</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostPage",
  data() {
    const post = "";
    return {
      post,
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
      fetch("http://localhost:3000/api/auth/post", options)
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
          location.assign("./post");
        });
    },
  },
};
</script>

<style>
.container-home {
  width: 100%;
  height: 100vh;
  background-color: pink;
  padding: 10px auto;
}
.display-box {
  margin: 10px;
  border: 1px solid darkgrey;
  width: 100%;
  height: 60vh;
  display:flex;
}
.post-box {
  width: 100%;
  height: 30%vh;
  /* display: flex;
  flex-direction: row; */
}
/* .post input {
  width: 100%;
} */
.buttons {
  display: flex;
  flex-direction: column;
  width: 100px;
}
</style>
