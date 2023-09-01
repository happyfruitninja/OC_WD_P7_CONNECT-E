<template>
  <div class="container_home">
    <div class="display_box">
      {{ postInfo }}
      <img
        class="image"
        src="imageUrl"
        v-if="imageUrl"
        alt="uploaded image"
        width="100"
        height="100"
      />
      <audio controls class="audio/mp3" src="audioUrl" v-if="audioUrl"></audio>
      <video
        controls
        class="video/mp4"
        src="videoUrl"
        v-if="videoUrl"
        width="100"
        height="100"
      ></video>
    </div>
    <div class="post_box">
      <textarea v-model="post" placeholder="My message.."></textarea>
      <div class="buttons">
        <input
          type="file"
          class="attach_file_button"
          @change="attachFile($event)"
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
    const image = null;
    return {
      post,
      image,
    };
  },
  methods: {
    postMessage() {
      const { token, userId } = JSON.parse(localStorage.getItem("userInfo"));
      const postInfo = {
        post: this.post,
        userId,
      };
      let payload;
      let contentType;
      if (this.image) {
        contentType = "multipart/form-data";
        payload = new FormData();
        payload.append("post", JSON.stringify(postInfo));
        //  TODO append postInfo and image to payload
      } else {
        contentType = "application/json";
        payload = JSON.stringify(postInfo);
      }
      const options = {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": contentType,
        },
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
          localStorage.setItem("postInfo", JSON.stringify(result));
          //  location.assign("./home");
        })
        .catch((error) => {
          console.error(error);
        });
    },
    attachFile(event) {
      this.image = event.target.files[0];

      // let formData = new FormData();
      // formData.append("icon", this.form.icon);

      // fetch("http://localhost:3000/api/auth/posts", {
      //   method: "POST",
      //   headers: {
      //     Authorization: "Bearer " + this.token,
      //     Accept: "application/json",
      //     "Content-Type": "multipart/form-data",
      //   },
      //   body: formData,
      // }).then(
      //   function (response) {
      //     if (response.status != 201) {
      //       this.fetchError = response.status;
      //     } else {
      //       response.json().then(
      //         function (data) {
      //           this.fetchResponse = data;
      //         }.bind(this)
      //       );
      //     }
      //   }.bind(this)
      // );
    },
    // markPostRead(postId) {},
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
  height: 60%;
  display: flex;
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
  width: 100px;
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
