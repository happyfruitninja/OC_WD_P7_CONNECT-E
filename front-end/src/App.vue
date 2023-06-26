<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <h1>Hi</h1>
  <router-view />
</template>

<router-link :to="{name: 'Login'}">Login</router-link>
<router-link :to="{ name: 'Signup' }">Signup</router-link> 
<router-link :to="{ name: 'Postpage' }">Postpage</router-link> 
<router-link :to="{ name: 'Profile' }">Profile</router-link> 
<router-link :to="{ name: 'View1' }">View1</router-link> 
<router-link :to="{ name: 'Viewall' }">Viewall</router-link> 
<router-link :to="{ name: 'Notfound' }">Notfound</router-link> 

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
