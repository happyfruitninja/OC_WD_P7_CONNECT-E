<template>
  <nav>
    <router-link :to="{ name: 'ProfilePage' }">User Profile</router-link>
  </nav>
  <div class="container">
    <div class="_60">
      <img
        :src="require('../src/assets/office.png')"
        alt="people in a meeting"
      />
    </div>
    <div class="_40">login</div>
  </div>

  <router-view />
</template>

<script>
export default {
  name: "App",
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: red;
}

nav {
  margin-top: 0;
  background-color: lightgreen;
}
body {
  border: 5px solid violet;
}
.container {
  border: 3px dashed blue;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 500px;
}
  ._60 {
    width: 59%;
    height: auto;
    border: 5px solid red;
  }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
._40 {
  width: 40%;
  height: 50px;
  border: 3px dashed yellow;
}

@media only screen and (max-width: 450px) {
  body {
    width: 100%;

    .container {
      text-align: center;

      width: 100%;
      height: 100%;

      ._60 {
        display: none;
      }

      ._40 {
        width: 100%;
      }
    }
  }
}
</style>
