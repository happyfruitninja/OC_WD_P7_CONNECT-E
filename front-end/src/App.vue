<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1>Hi</h1>
  <router-view />
</template>

<router-link :to="{name: 'LoginPage'}">LoginPage</router-link>
<router-link :to="{ name: 'SignupPage' }">SignupPage</router-link> 
<router-link :to="{ name: 'PostPage' }">PostPage</router-link> 
<router-link :to="{ name: 'ProfilePage' }">ProfilePage</router-link> 
<router-link :to="{ name: 'ViewSingle' }">ViewSingle</router-link> 
<router-link :to="{ name: 'ViewAll' }">ViewAll</router-link> 
<router-link :to="{ name: 'NotFound' }">NotFound</router-link> 

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
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
