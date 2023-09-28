<template>
  <NavHeader />
  <router-view />
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";
export default {
  name: "LoginComp",
  components: { NavHeader },

  // }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 0.9em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  display: flex;
  text-align: center;
  max-width: 1200px;
  padding: 20px;
  height: 85vh;
}

.block-left {
  width: 60%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  max-height: 700px;
  background-size: cover;
  margin-right: 20px;
}
.block-right {
  margin: 100px;
  width: 40%;
  height: 80%;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

form {
  margin: 15px;
}

form div {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 7px;
}

input {
  text-align: center;
  border: 0.5px solid gray;
}

.submit {
  margin-top: 30px;
}

a {
  text-decoration: none;
}

video,
img {
  margin: 10px auto;
  width: 100%;
  max-width: 770px;
  height:100%;
}

audio {
  margin: 10px;
  max-width: 500px;
}

@media only screen and (max-width: 700px) {
  #app {
    font-size: 0.8em;
  }
  .container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
  .block-left {
    display: none;
  }

  .block-right {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
5;
