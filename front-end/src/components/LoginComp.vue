<template>
  <h1>connect-e</h1>
  <div id="loginform">
    <form @submit.prevent="login">
      <label for="id">ID : </label>
      <input v-model="userName" type="text" name="userName" required />
      <label for="password">Password : </label>
      <input v-model="password" type="text" name="password" required />
      <button type="submit" value="Sign In"></button>
    </form>
    <router-link :to="{ name: 'SignupComp' }">want to join?</router-link>
    <p>Forgotten your password?</p>
  </div>
</template>
<script>
export default {
  name: "LoginComp",
  data() {
    const userName = "userName";
    const password = "password";
    return { userName, password };
  },
  methods: {
    login() {
      const userInfo = { userName: this.userName, password: this.password };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      };
      fetch("http://localhost:3000/api/auth/login", options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result);
          //TODO add userInfo to localStorage
          //TODO programatically(JS) route the user to the home page using vue router
        });
    },
  },
  components: {},
};
</script>

<style></style>
