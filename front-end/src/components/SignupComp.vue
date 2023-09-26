<template>
  <div class="container">
    <div class="block-left"></div>
    <div class="block-right">
      <h1>connect-e</h1>
      <h2>Sign up</h2>
      <div class="form">
        <form @submit.prevent="signup">
          <div>
            <input
              v-model="userName"
              id="userName"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <input
              v-model="email"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </div>

          <div class="submit">
            <input type="submit" value="Create Account" />
          </div>
        </form>
        <p>
          By providing my information, I agree to Grouponia's Privacy Policy and
          Legal Statement.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "signupComp",
  data() {
    // add user name, email and password to the return state below
    const userName = "userName";
    const email = "email";
    const password = "password";
    const confPassword = "confPassword";
    return { signupPage: [userName, email, password, confPassword] };
  },
  methods: {
    //  call this function when the user clicks the button
    signup() {
      const signupInfo = {
        userName: this.userName,
        email: this.email,
        password: this.password,
        confPassword: this.confPassword,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupInfo),
      };
      console.log("sign up user ...");

      //  user fetch API to send signup request
      fetch("http://localhost:3000/api/auth/signup", options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result);
          // redirect user to login using Vue(need token) instead of location.assign(`./login`);
          this.$router.push("./login");
        });
    },
  },
};
</script>

<style>
.container {
  position: fixed;
  top: 100px;
  width: 100%;
}
.block-left {
  background-image: url("../assets/office.jpg");
}

p {
  width: 80%;
  margin: 0;
  font-size: 0.7em;
}

@media only screen and (max-width: 700px) {
  .block-right {
    width: 80%;
  }
}
</style>
