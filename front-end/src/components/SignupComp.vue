<template>
  <div class="container">
    <div class="block-left"></div>
    <div class="block-right">
      <h1>connect-e</h1>
      <div class="form">
        <form @submit.prevent="signup">
          <div>
            <label for="userName">Username </label>
            <input
              v-model="userName"
              id="userName"
              type="text"
              placeholder="Username"
              required
            />
          </div>
          <div>
            <label for="email">Email </label>
            <input
              v-model="email"
              type="text"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label for="password">Password </label>
            <input
              v-model="password"
              type="text"
              name="password"
              placeholder="Password"
              required
            />
          </div>
          <div>
            <label for="confPassword"> Confirm Password </label>
            <input
              v-model="confPassword"
              type="text"
              name="confPassword"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="submit">
            <input @click="signup" type="submit" value="Create Account" />
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
    //TODO add user name, email and password to the return state below
    const userName = "userName";
    const email = "email";
    const password = "password";
    const confPassword = "confPassword";
    return { signupPage: [userName, email, password, confPassword] };
  },
  methods: {
       // TODO call this function when the user clicks the button
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
   
      // TODO user fetch API to send signup request
      fetch("http://localhost:3000/api/auth/signup", options)
        .then((data) => {
          if (!data.ok) {
            throw Error(data.status);
          }
          return data.json();
        })
        .then((result) => {
          console.log(result.signupInfo);
        });
        localStorage.setItem("signupInfo", JSON.stringify(signupInfo));
      // TODO redirect user to login (need token)
      location.assign(`./login`);
    },
   
  },
};
</script>

<style>
.block-left {
  background-image: url("../assets/office.jpg");
}

 p {
  width:80%;
  margin:0;
  font-size: 0.7em;
}

@media only screen and (max-width: 700px) {
  .block-right {
    width: 80%;
  }
}
</style>
