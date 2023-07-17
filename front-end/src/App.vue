<template>
   <H1 v-if="false">Welcome to Connect-E</H1>
  <div>Login</div>
  <div>{{ login }}</div>

  <router-link :to="{ name: 'ProfilePage' }">ProfilePage</router-link>
  <!-- **nav component here use v-if to show or hide  ie login page**-->

  <router-view /> <!-- This stays here -->
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
