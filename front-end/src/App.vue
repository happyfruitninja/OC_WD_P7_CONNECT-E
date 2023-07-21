<template>
  <div id="app">
    <nav>
      <router-link :to="{ name: 'ProfilePage' }">User Profile</router-link>
    </nav>
    <div class="image"></div>

    <router-view />
   This stays here
  </div>
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
}

nav {
  margin-top: o;
  background-color: lightgreen;
}

image {
  width: 60%;
  height: 50px;
  border: 2px solid red;
}

form {
  width: 40%;
  height: 50px;
  border: 2px solid blue;
}

/*
<meta name="viewport" content="width=device-width, initial-scale=1.0">
@media only screen and (max-width: 450px) {
  body {
    width:100%;
  }

}

*/
</style>
