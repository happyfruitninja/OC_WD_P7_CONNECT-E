<template>
  <div class="container">
    <div class="display-box">This is the display box</div>
    <div class="post-box">
      <textarea>This is post box</textarea>
      <div class="buttons"></div>
      <button v-on="click" id="attach">Attach</button>
      <button v-on="click" id="post">Post</button>
    </div>
  </div>
  <H1>Postpage</H1>
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

.container {
  width:60%;
  height: 50%;
  background-color: pink;
}
.display-box {
  margin: 10px;
  border: 1px solid lightgrey;
  width: 60%;
  height: 800px;
}
.post-box {
  display: flex;
  flex-direction: row;
 }
 .post input {
  width: 100%;
 }
.buttons {
  display: flex;
  flex-direction: column;
  width: 100px;
}
</style>
