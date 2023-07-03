<template>
  <form>
    <label for="id">ID : </label>
    <input type="text" id="id" name="id" required>
    <label for="password">Password : </label>
    <input type="text" id="id" name="password" required>
  </form>
  <router-link :to="{ name: 'SignupPage' }">want to join?</router-link>
</template>

<script>
export default {
  name: "LoginPage",
  components: {
    //HelloWorld
  },
};
</script>
