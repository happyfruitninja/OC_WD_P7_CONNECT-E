<template>
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

<style></style>
