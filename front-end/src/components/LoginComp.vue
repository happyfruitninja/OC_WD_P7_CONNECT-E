<template>
  <div class="container">
    <div class="block-left"></div>
    <div class="block-right">
      <h1>connect-e</h1>
      <div class="form">
        <form @submit.prevent="login">
          <div>
            <input v-model="userName" id="userName" type="text" required />
          </div>
          <div>
            <input v-model="password" id="password" type="password" required />
          </div>
          <div class="submit">
            <input @click="login" type="submit" value="Log In" required />
          </div>
        </form>
        <router-link :to="{ name: 'SignupComp' }" id="join">
          Want to join?</router-link
        >
        <p>Forgot your password?</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginComp",
  data() {
    const userName = "userName";
    const password = "password";
    return { loginPage: [userName, password] };
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
      // fetch login info
      fetch("http://localhost:3000/api/auth/login", options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log("inside then");
          console.log(result);
          //add userInfo to localStorage
          localStorage.setItem("userInfo", JSON.stringify(result));
          location.assign("./home");
        });

      console.log("outside then");
    },
  },
};
</script>

<style>
.block-left {
  background-image: url("../assets/office.jpg");
}
#join {
  margin-bottom: 10px;
}
</style>
