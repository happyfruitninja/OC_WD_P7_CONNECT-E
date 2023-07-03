<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
  <router-view /> -->
  <H1>Welcome to Connect-E</H1>
  <div>Login</div>
  <div>{{ login }}</div>
</template>

<!-- 
<router-link :to="{ name: 'NotFound' }">NotFound</router-link> -->

<script>
// import HelloWorld from './components/HelloWorld.vue'
export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
